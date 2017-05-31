#!/bin/bash

# Check if we're in the right directory
directory="dev"
if [ ! -d "$directory" ]
then
    echo "--- Please run from the project root"
    exit
fi

(./dev/scripts/composer-install.sh)
(./dev/scripts/clear-caches.sh)
(./dev/scripts/update-database.sh)
(./dev/scripts/npm-install.sh)
(./dev/scripts/bower-install.sh)
(./dev/scripts/grunt-refresh.sh)
(./dev/scripts/di-compile.sh)

echo -e "\xe2\x9c\x94 Finished"
