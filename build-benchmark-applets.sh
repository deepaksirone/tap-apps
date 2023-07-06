#!/bin/bash
#
#
set -ex

function usage() {
	echo "build-benchmark-applets.sh <benchmark_dir> <output_dir> <triggerHostname> <triggerPort> <actionHostname> <actionPort>"
	exit 1
}

if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ] || [ -z "$4" ] || [ -z "$5" ] || [ -z "$6" ]; then
        usage
fi

triggerHostname=$3
triggerPort=$4
actionHostname=$5
actionPort=$6

if [ -z "$RULE_SHIM_DIR" ]; then
	echo "RULE_SHIM_DIR not set"
	exit 1
fi

if [ -z "$TAP_CRYPTOR_DIR" ]; then
	echo "TAP_CRYPTOR_DIR not set"
	exit 1
fi

if ! command -v ssc &> /dev/null
then
	echo "StaticScript could not be found; make sure your PATH is updated"
	exit 2
fi

#export RULE_LIB_DIR=$1/output
#git checkout .

mkdir -p build
sed -i "270s/.*/     http::Request request{\"http:\/\/$triggerHostname:$triggerPort\/event_data\/\"};/" src/encrypted_rule/host/enclave-host.cpp
sed -i "13s/.*/    #define RULE_ACTION_PARAMS_UNESCAPED { \"{ \\\\\"attrib1\\\\\" : \\\\\"val1\\\\\", \\\\\"attrib2\\\\\" : \\\\\"val2\\\\\", \\\\\"action_url\\\\\": \\\\\"http:\/\/$actionHostname:$actionPort\/action_data\/\\\\\", \\\\\"action_id\\\\\": \\\\\"0\\\\\" }\",}/" src/encrypted_rule/eapp/rule_params.h
sed -i "289s/.*/     http::Request request{\"http:\/\/$triggerHostname:$triggerPort\/event_data\/\"};/" src/rule_process/host/enclave-host.cpp
sed -i "13s/.*/    #define RULE_ACTION_PARAMS_UNESCAPED { \"{ \\\\\"attrib1\\\\\" : \\\\\"val1\\\\\", \\\\\"attrib2\\\\\" : \\\\\"val2\\\\\", \\\\\"action_url\\\\\": \\\\\"http:\/\/$actionHostname:$actionPort\/action_data\/\\\\\", \\\\\"action_id\\\\\": \\\\\"0\\\\\" }\",}/" src/rule_process/eapp/rule_params.h

for file in $1/*;
do
	if [ ! -d "$file" ]; then
		f_name=$(basename $file)
		echo "Building $f_name";
		pushd $1
			ssc --riscv $f_name
		popd

		pushd ./build
			rm -rf $(pwd)/src/encrypted_rule/enc_rule*
			rm -rf $(pwd)/src/rule_process/rule_process*
			cmake ..
	  		make enc_rule_package
			make rule_process_package
	        	cp ./src/encrypted_rule/enc_rule.ke $2/enc_rule_$f_name.ke
			cp ./src/rule_process/rule_process.ke $2/rule_process_$f_name.ke
		popd
	fi
done


