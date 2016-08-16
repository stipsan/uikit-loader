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

## Reuse UIkit variables in your own .less files

webpack.config.js:
```javascript
{
  [ ... ]
  uikitLoader: {
    theme: 'custom/uikit.less',
    test:
  },
  plugins: [
    {
      test: /\.less$/,
      loaders: ["style", "css", "less", "uikit"]
    }
  ]
}
```

The default value of `uikitLoader.test` is `/node_modules\/uikit\/.+less$/`
to avoid affecting your own .less code by default.

In your `custom/uikit.less` file:
```less
// UIkit
// ========================================================================

@import "~uikit/dist/less/uikit-variables.less";

@icon-font-path: "../../fonts";
@base: "default";

// Theme
// ========================================================================

// LESS related
@import "~uikit/themes/@{base}/variables.less";

// Defaults
@import "~uikit/themes/@{base}/base.less";

// Layout
@import "~uikit/themes/@{base}/grid.less";
@import "~uikit/themes/@{base}/panel.less";
@import "~uikit/themes/@{base}/block.less";
@import "~uikit/themes/@{base}/article.less";
@import "~uikit/themes/@{base}/comment.less";

// Navs
@import "~uikit/themes/@{base}/nav.less";
@import "~uikit/themes/@{base}/navbar.less";
@import "~uikit/themes/@{base}/subnav.less";
@import "~uikit/themes/@{base}/breadcrumb.less";
@import "~uikit/themes/@{base}/pagination.less";
@import "~uikit/themes/@{base}/tab.less";
@import "~uikit/themes/@{base}/thumbnav.less";

// Elements
@import "~uikit/themes/@{base}/list.less";
@import "~uikit/themes/@{base}/description-list.less";
@import "~uikit/themes/@{base}/table.less";
@import "~uikit/themes/@{base}/form.less";

// Common
@import "~uikit/themes/@{base}/button.less";
@import "~uikit/themes/@{base}/icon.less";
@import "~uikit/themes/@{base}/close.less";
@import "~uikit/themes/@{base}/badge.less";
@import "~uikit/themes/@{base}/alert.less";
@import "~uikit/themes/@{base}/thumbnail.less";
@import "~uikit/themes/@{base}/overlay.less";
@import "~uikit/themes/@{base}/column.less";

// JavaScript
@import "~uikit/themes/@{base}/dropdown.less";
@import "~uikit/themes/@{base}/modal.less";
@import "~uikit/themes/@{base}/offcanvas.less";

// Need to be loaded last
@import "~uikit/themes/@{base}/text.less";
@import "~uikit/themes/@{base}/utility.less";
@import "~uikit/themes/@{base}/contrast.less";
```

Now you can re-use variables and mixins from uikit in your own code!
