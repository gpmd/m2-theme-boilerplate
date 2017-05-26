#!/bin/bash

read -p "--- Clear var folder caches? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Clearing generated caches..."

    rm -rf var/cache/*
    rm -rf var/di/*
    rm -rf var/generation/*
    rm -rf var/page_cache/*

    echo -e "\xe2\x9c\x94 All done"
fi

# Clear Magento caches
read -p "--- Clear Magento caches? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Clearing Magento caches..."

    php bin/magento cache:clean
    php bin/magento cache:flush

    echo -e "\xe2\x9c\x94 All done"
fi

# Clear pub/static symlinks
read -p "--- Clear pub/static symlinks? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Clearing pub/static symlinks..."

    find pub/static -type l -exec rm "{}" \;

    echo -e "\xe2\x9c\x94 Done"
fi
