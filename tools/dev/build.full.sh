#!/bin/bash

# Check if we're in the right directory
directory="tools"
if [ ! -d "$directory" ]
then
    echo "--- Please run from the project root"
    exit
fi

(./tools/dev/scripts/composer-install.sh)
(./tools/dev/scripts/clear-caches.sh)
(./tools/dev/scripts/update-database.sh)
(./tools/dev/scripts/npm-install.sh)
(./tools/dev/scripts/bower-install.sh)
(./tools/dev/scripts/grunt-refresh.sh)
(./tools/dev/scripts/di-compile.sh)

echo -e "\xe2\x9c\x94 Finished"
