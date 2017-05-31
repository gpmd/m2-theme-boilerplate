#!/bin/bash

read -p "--- Update npm packages? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Updating npm packages..."

    (npm install && npm prune)

    echo -e "\xe2\x9c\x94 Done"
fi
