#!/bin/bash


pushd $1

success_count=0
failure_count=0
#RED="\033[1;31m"
GREEN=$(tput setaf 2)
RED=$(tput setaf 1)
NC=$(tput sgr0)

#echo "" > failures
for file in $1/*; 
do
	if [ ! -d "$file" ]; then
		f_name=$(basename $file)
		#echo "$f_name"
		ssc --riscv $f_name &> /dev/null
		if [ "$?" -eq "1" ]; then
			failure_count=$(($failure_count + 1))
			echo "${RED} $f_name: FAILURE ${NC}"
			#echo "$f_name: FAILURE" >> failures
		else
			success_count=$(($success_count + 1))
			echo "${GREEN} $f_name: SUCCESS ${NC}"
		fi
	fi

done
echo "Success Count: $success_count"
echo "Failure Count: $failure_count"
echo "Total: $(($success_count + $failure_count))"
