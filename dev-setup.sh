#!/bin/bash

chmod +x tools/dev/*
chmod +x tools/dev/githooks/*

(./tools/dev/githooks.sh && ./tools/dev/build.sh)
