# Magento 2 Theme Boilerplate

**Please Note:** This is set up to work with our M2base theme as a parent, so probably isn&#8217;t much use to anyone else.

## Usage

1. Clone/download the repo and merge the files into your Magento 2 site, following the same directory structure
2. Change all occurrences in the folders names and files of `MyTheme`, `myTheme` and `mytheme` to the name of your new theme (you could do a case sensitive find & replace)
3. Add a new theme config block to `tools/dev/themes.js`

### themes.js

To mitigate Magento overwriting the default Grunt `themes.js` config file each time the core files are updated, add the following `scripts` node to your project&#8217;s `composer.json`. This will copy our own `themes.js` file into place each time you run `composer install` or `composer update`:

```
"scripts": {
    "post-install-cmd": [
        "cp tools/dev/themes.js dev/tools/grunt/configs/themes.js"
    ],
    "post-update-cmd": [
        "cp tools/dev/themes.js dev/tools/grunt/configs/themes.js"
    ]
}
```

## Dev build tools

Also included are a couple of scripts to help automate some of the more common front end development tasks.

Simply run the initial setup script and you will be prompted with a number of options. Then, each time you `git pull` or `git merge` you will be automatically presented with the same prompts. You can also trigger the build script manually.

**Intial setup:**
```
chmod +x dev-setup.sh
./dev-setup.sh
```

**Manually run the build script:**
```
./tools/dev/build.sh
```

## Grunt tasks

### Icons

```
grunt --gruntfile=Gruntfile.mytheme.js icons
```

### Pattern library

```
grunt --gruntfile=Gruntfile.mytheme.js patternlib
```

The generated pattern library can be found at the following URL (assuming you have set `pub/` as your webroot):

```
static/frontend/GPMD/MyTheme/en_GB/patternlib/mytheme/index.html
```

### Default Magento Grunt tasks

Refresh all the themes (cleans, generates symlinks and compiles styles):

```
grunt refresh
```

Clean styles:

```
grunt clean
```

Compile all styles:

```
grunt less
```

Compile a specific theme&#8217;s styles:

```
grunt less:<theme>
```

Watch for changes:

```
grunt watch
```
