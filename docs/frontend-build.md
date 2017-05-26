# Frontend build

## Build scripts

### Initial setup

Run the setup script and you will be prompted with a number of options.

```
chmod +x dev-setup.sh
./dev-setup.sh
```

### Running the build script

If you have already run the `dev-setup.sh` script the build will be automatically triggered when you `git pull`. If you want to trigger the build manually please run:

```
./tools/dev/build.sh
```

## Grunt tasks

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
