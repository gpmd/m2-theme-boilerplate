#!/bin/bash

read -p "--- Composer install? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Installing Composer packages..."

    composer install --prefer-source

    echo -e "\xe2\x9c\x94 Done"
fi
