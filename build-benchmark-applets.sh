#!/bin/bash
#
#
set -ex

function usage() {
	echo "build-benchmark-applets.sh <benchmark_dir> <output_dir>"
	exit 1
}

if [ -z "$1" ]; then
	usage
fi

if [ -z "$2" ]; then
        usage
fi


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

export RULE_LIB_DIR=$1/output

for file in $1/*;
do
	if [ ! -d "$file" ]; then
		f_name=$(basename $file)
		echo "Building $f_name";
		pushd $1
		ssc --riscv $f_name
		popd

		rm -rf build/src/encrypted_rule/enc_rule*
		mkdir -p build
		pushd ./build
			cmake ..
	  		make enc_rule_package
			make rule_process_package
	        	cp src/encrypted_rule/enc_rule.ke $2/enc_rule_$f_name.ke
			cp src/rule_process/rule_process.ke $2/rule_process_$f_name.ke
		popd
	fi
done


