#!/bin/bash

(./tools/dev/check-directory.sh)

# Check if post-merge symlink exists and if not, create it
file=".git/hooks/post-merge"
if [ -h "$file" ]
then
    echo -e "\xe2\x9c\x94 post-merge git hook symlink already exists"
else
    echo "--- Creating post-merge git hook symlink..."

    (cd .git/hooks; ln -s ../../tools/dev/githooks/post-merge post-merge)

    echo -e "\xe2\x9c\x94 Done"
fi
