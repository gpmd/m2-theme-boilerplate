#!/bin/bash

# Import variables
source ./tools/dev/scripts/vars.sh

# Check if we're in the right directory
directory="tools"
if [ ! -d "$directory" ]
then
    echo "--- Please run from the project root"
    exit
fi

read -p "--- Generate icons? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Generating icons..."

    (grunt --gruntfile=Gruntfile.$m2base_theme_slug.js icons)

    echo -e "\xe2\x9c\x94 Done"
fi

read -p "--- Compile pattern library? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Compiling pattern library..."

    (grunt --gruntfile=Gruntfile.$m2base_theme_slug.js patternlib)

    echo -e "\xe2\x9c\x94 Done"
fi

read -p "--- Clean theme static files? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Cleaning theme static files..."

    (grunt clean:$m2base_theme_slug)

    echo -e "\xe2\x9c\x94 Done"
fi

read -p "--- Republish theme symlinks? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Republishing theme symlinks..."

    (grunt exec:$m2base_theme_slug)

    echo -e "\xe2\x9c\x94 Done"
fi

read -p "--- Compile theme CSS? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Compiling theme CSS..."

    (grunt less:$m2base_theme_slug)

    echo -e "\xe2\x9c\x94 Done"
fi

echo -e "\xe2\x9c\x94 Finished"
