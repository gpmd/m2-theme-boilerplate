# Frontend build

**Please Note:** The frontend build scripts and Grunt workflow are only used for local development purposes. When deploying use `php bin/magento setup:static-content:deploy`.

## Register theme

First register the theme in `./tools/dev/themes.js`.

```
<theme>: {
    area: 'frontend',
    name: '<Theme>/Default',
    locale: 'en_GB',
    files: [
        'css/styles-m',
        'css/styles-l'
    ],
    dsl: 'less'
}
```

To mitigate Magento overwriting the default Grunt `themes.js` config file, add the following `scripts` node to the project&#8217;s `composer.json`. This will copy our own `themes.js` file into place each time `composer install` or `composer update` is run:

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

## Build scripts

### Initial setup

Run the setup script and you will be prompted with a number of `y/N` options.

```
chmod +x dev-setup.sh
./dev-setup.sh
```

### Running the build script

If you have already run the `dev-setup.sh` script the build will be automatically triggered when you `git pull`. If you want to trigger the build manually please run:

```
./tools/dev/build.full.sh
```

You can also run any of the build steps separately by using the shell scripts in `.tools/dev/scripts/`. 

### Running theme specific build tasks

Each theme has its own set of build tasks. You can trigger them using the following command:

```
./tools/dev/build.<theme>.sh
```

## Grunt tasks

You can either run the theme specific build script (above) and respond to `y/N` prompts, or you can run each task individually.

### Icons

Icons are generated using a Grunt task and should be committed to the repo.

```
grunt --gruntfile=Gruntfile.<theme>.js icons
```

### Pattern library

The pattern library is generated using a Grunt task and should be committed to the repo.

```
grunt --gruntfile=Gruntfile.<theme>.js patternlib
```

The generated pattern library can be found at the following URL (assuming you have set `pub/` as your webroot):

```
static/frontend/GPMD/<Theme>/en_GB/patternlib/<theme>/index.html
```

### Default Magento Grunt tasks

The most common tasks you might choose to run are:

```
grunt refresh
grunt clean:<theme>
grunt exec:<theme>
grunt less:<theme>
grunt watch
```

Full details on Magento 2&#8217;s default grunt commands can be found [here](http://devdocs.magento.com/guides/v2.0/frontend-dev-guide/css-topics/css_debug.html).
