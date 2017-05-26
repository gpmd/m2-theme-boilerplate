#!/bin/bash

read -p "--- Update database? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Updating database..."

    php -dmemory_limit=1G bin/magento setup:upgrade

    echo -e "\xe2\x9c\x94 Done"
fi
