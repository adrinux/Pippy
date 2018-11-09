# Pippy

A Hugo theme based on H5bp and including hugo pipes support

## Dependencies

### PostCSS

Install with npm:

- postcss-cli
- postcss-import
- postcss-preset-env
- autoprefixer
- postcss-reporter

``` bash
npm install -g postcss-cli
```


``` bash
npm install -D postcss-preset-env autoprefixer postcss-reporter postcss-import
```

## Params

## Google Analytics
The GA code block from H5BP has been placed in a hugo partial. It will not be included unless you define a variable 'GoogleAnalytics' containing your Google Analytics site ID.
eg inside config.toml
``` toml
[Params]
  GoogleAnalytics = "YOUR-GA-SITE-ID"
```