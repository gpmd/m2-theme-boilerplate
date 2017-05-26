#!/bin/bash

read -p "--- Regenerate code and DI config? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Regenerating code and DI config..."

    php -dmemory_limit=1G bin/magento setup:di:compile

    echo -e "\xe2\x9c\x94 Done"
fi
