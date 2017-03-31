#!/bin/bash

# Check if we're in the right directory
directory="tools"
if [ ! -d "$directory" ]
then
    echo "--- Please run this shell script from the project root"
    exit
else
    echo "--- Running githook setup..."
fi

# Check if post-merge symlink exists and if not, create it
file=".git/hooks/post-merge"
if [ -h "$file" ]
then
    echo -e "\xe2\x9c\x94 post-merge git hook symlink already exists"
else
    echo "--- Creating post-merge git hook symlink..."
    (cd .git/hooks; ln -s ../../tools/dev/githooks/post-merge post-merge)
    echo -e "\xe2\x9c\x94 All done"
fi
