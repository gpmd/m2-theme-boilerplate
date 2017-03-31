#!/bin/bash

# Check if we're in the right directory
directory="tools"
if [ ! -d "$directory" ]
then
    echo "--- Please run this shell script from the project root"
    exit
else
    echo "--- Running build script..."
fi

# Composer
read -p "--- Composer install? [y/N] " answer
if [[ $answer = y ]] ; then
    echo "--- Installing Composer packages..."

    composer install --prefer-source

    echo -e "\xe2\x9c\x94 All done"
fi

# Clear generated caches
read -p "--- Clear generated caches? [y/N] " answer
if [[ $answer = y ]] ; then
    echo "--- Clearing generated caches..."

    rm -rf var/cache/*
    rm -rf var/di/*
    rm -rf var/generation/*
    rm -rf var/page_cache/*

    echo -e "\xe2\x9c\x94 All done"
fi

# Clear Magento caches
read -p "--- Clear Magento caches? [y/N] " answer
if [[ $answer = y ]] ; then
    echo "--- Clearing Magento caches..."

    php bin/magento cache:clean
    php bin/magento cache:flush

    echo -e "\xe2\x9c\x94 All done"
fi

# Clear pub/static symlinks
read -p "--- Clear pub/static symlinks? [y/N] " answer
if [[ $answer = y ]] ; then
    echo "--- Clearing pub/static symlinks..."

    find pub/static -type l -exec rm "{}" \;

    echo -e "\xe2\x9c\x94 All done"
fi

# Update database
read -p "--- Update database? [y/N] " answer
if [[ $answer = y ]] ; then
    echo "--- Updating database..."

    php -dmemory_limit=1G bin/magento setup:upgrade

    echo -e "\xe2\x9c\x94 All done"
fi

# NPM
read -p "--- Update npm packages? [y/N] " answer
if [[ $answer = y ]] ; then
    echo "--- Updating npm packages..."

    # Core Magento
    (npm install && npm prune)

    # M2base theme
    cd vendor/gpmd/theme-frontend-m2base
    (npm install && npm prune)
    cd ../../../

    # Curtisward theme
    cd app/design/frontend/MyTheme/Default
    (npm install && npm prune)
    cd ../../../../../

    echo -e "\xe2\x9c\x94 All done"
fi

# Bower
read -p "--- Update bower components? [y/N] " answer
if [[ $answer = y ]] ; then
    echo "--- Updating bower components..."

    # M2base theme
    cd vendor/gpmd/theme-frontend-m2base
    (bower install && bower prune)
    cd ../../../

    # Curtisward theme
    cd app/design/frontend/MyTheme/Default
    (bower install && bower prune)
    cd ../../../../../

    echo -e "\xe2\x9c\x94 All done"
fi

# Grunt
read -p "--- Refresh all themes? [y/N] " answer
if [[ $answer = y ]] ; then
    echo "--- Refreshing themes..."

    # All themes
    (grunt refresh)

    # NOTE: Assets, such as icons and modernizr, are now run manually and added to the repo

    echo -e "\xe2\x9c\x94 All done"
fi

# Regenerate code
read -p "--- Regenerate code and DI config? [y/N] " answer
if [[ $answer = y ]] ; then
    echo "--- Regenerating code and DI config..."

    php -dmemory_limit=1G bin/magento setup:di:compile

    echo -e "\xe2\x9c\x94 All done"
fi

echo -e "\xe2\x9c\x94 Finished"
