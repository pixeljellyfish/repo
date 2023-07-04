#!/bin/sh

# postinst script for scan-packages
find . -name '.DS_Store' -type f -delete

# packages
echo "Building package list"
dpkg-scanpackages -m ./debs > Packages

echo "Bzip compressing"
bzip2 -5fkv Packages > Packages.bz2

echo "XZ compressing"
xz -5fkev Packages > Packages.xz

echo "LZMA compressing"
xz -5fkev --format=lzma Packages > Packages.lzma
