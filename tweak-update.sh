#!/bin/sh

read -r -p "Enter the name of the tweak you would like to add to your repo: "  tweakname
wait 4
echo "$tweakname is now chosen as the tweak to add to your repo"
wait
read -r -p "Enter Your username to cd into: " Username
wait 4
echo "${Username} will now to selected to cd into please wait while we set some things up............"
wait 10
sudo pushd "/"
tweakname=${tweakname}
wait 5
username=${UserName}
wait 5
PATH="${username}/${tweakname}"
wait 5
sudo pushd ${PATH}
wait 5