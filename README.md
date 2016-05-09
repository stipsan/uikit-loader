# UIkit Loader

A Webpack CSS loader for [UIkit](http://getuikit.com/), a lightweight and modular front-end framework for developing fast and powerful web interfaces

[![NPM](https://nodei.co/npm/uikit-loader.png)](https://www.npmjs.com/package/uikit-loader)

# When should I use this?

If you want an easy way of customizing your theme while loading it in your webpack compiled stylesheets then this loader is for you ;)
That includes usage with CSS modules.

# Usage

1. Create a sass/less file for your UIkit variables.
2. Add the uikitLoader after the sass/less loader.
3. Configure the loader with the location of your variables file.

# Examples

Assuming you put your variables here: `./custom/theme.less`

## Configure by query

```javascript
{
  test: /\.less$/,
  loaders: ["style", "css?modules&importLoaders=2", "less", "uikit?theme=custom/theme.less"]
}
```

## Configure by loader options

Inside your webpack config object:
```javascript
{
  [ ... ]
  uikitLoader: {
    theme: 'custom/uikit.scss'
  },
  plugins: [
    {
      test: /\.scss$/,
      loaders: ["style", "css?modules&importLoaders=2", "sass", "uikit"]
    }
  ]
}
```

# This is still in Alpha, more usage docs is coming!