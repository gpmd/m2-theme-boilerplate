#!/bin/bash

read -p "--- Clear var folder caches? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Clearing var folder caches..."

    rm -rf var/cache/*
    rm -rf var/di/*
    rm -rf var/generation/*
    rm -rf var/page_cache/*

    echo -e "\xe2\x9c\x94 All done"
fi

read -p "--- Clear Magento caches? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Clearing Magento caches..."

    php bin/magento cache:clean
    php bin/magento cache:flush

    echo -e "\xe2\x9c\x94 All done"
fi
