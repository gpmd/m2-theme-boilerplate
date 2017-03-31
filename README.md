# Magento 2 Theme Boilerplate

**Please Note:** This is set up to work with our M2base theme as a parent, so probably isn&#8217;t much use to anyone else.

## Usage

1. Clone/download the repo and merge the files into your Magento 2 site, following the supplied directory structure
2. Change all occurrences in the folders names and files of `MyTheme` and `mytheme` to the name of your new theme
3. Add a new theme config block to your site&#8217;s `themes.js` (you can use `tools/dev/themes.js.sample` as a reference)

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
