#!/bin/bash

source ./tools/dev/scripts/vars.sh

read -p "--- Update bower components? [y/N] " answer
if [[ $answer = y ]] ;
then
    echo "--- Updating bower components..."

    # M2base theme
    cd vendor/gpmd/theme-frontend-m2base
    (bower install && bower prune)
    cd ../../../

    # Custom theme
    cd app/design/frontend/$theme/Default
    (bower install && bower prune)
    cd ../../../../../

    echo -e "\xe2\x9c\x94 Done"
fi
