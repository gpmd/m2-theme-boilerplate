# Magento 2 Theme Boilerplate

> A child theme boilerplate for our M2base core theme

**Please Note:** This is set up to work with our M2base theme as a parent, so probably isn&#8217;t much use to anyone else.

## Usage

1. Clone/download the repo and merge the files into your Magento 2 site, following the same directory structure
2. Change all occurrences in the folders names and files of `MyTheme`, `myTheme` and `mytheme` to the name of your new theme (you could do a case sensitive find & replace)
3. Register the theme in `tools/dev/themes.js`

### themes.js

**Please Note:** To mitigate Magento overwriting the default Grunt `themes.js` config file each time the core files are updated, add the following `scripts` node to your project&#8217;s `composer.json`. This will copy our own `themes.js` file into place each time you run `composer install` or `composer update`:

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

## Frontend Build

See the included `docs/frontend-build.md` doc.
