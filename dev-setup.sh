#!/bin/bash

chmod +x dev/*
chmod +x dev/githooks/*

(dev/githooks.sh)
(dev/build.full.sh)
