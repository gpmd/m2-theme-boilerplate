#!/bin/bash

read -p "--- Refresh all themes? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Refreshing themes..."

    (grunt refresh)

    echo -e "\xe2\x9c\x94 Done"
fi
