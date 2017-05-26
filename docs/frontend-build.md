# Frontend build

**Please Note:** The frontend build scripts and Grunt workflow are only used for local development purposes. When deploying use `php bin/magento setup:static-content:deploy`.

## Build scripts

### Initial setup

Run the setup script and you will be prompted with a number of options, to which you can reply `y` or `n`.

```
chmod +x dev-setup.sh
./dev-setup.sh
```

### Running the build script

If you have already run the `dev-setup.sh` script the build will be automatically triggered when you `git pull`. If you want to trigger the build manually please run:

```
./tools/dev/build.sh
```

You can also run each step separately by using the shell scripts in `.tools/dev/scripts/`. 

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

Refresh all the themes:

```
grunt refresh
```

Clean all styles:

```
grunt clean
```

Clean theme specific styles:

```
grunt clean:<theme>
```

Compile all styles:

```
grunt less
```

Compile theme specific styles:

```
grunt less:<theme>
```

Watch for changes:

```
grunt watch
```
