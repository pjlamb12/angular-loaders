# Angular Loaders

This is an Angular component library that gives you CSS loaders for your application. There are several options, all
taken from [Tobias Ahlin](https://twitter.com/tobiasahlin)'s [SpinKit](http://tobiasahlin.com/spinkit/). They are pure
HTML and CSS loaders. Just pass in the type of spinner you want and the color you want it to be in string (red) or hex
format (#ff0000).

## Using the Component

Import it into your project, and then put it in your app using the selector `ng-loader`. There are two inputs:
`spinnerType` and `spinnerColor`.

`spinnerType`: Choose one of the following values: 'rotating-square', 'pulsing-circles', 'growing-bars',
'rotating-cubes', 'growing-circle', 'ellipsis', 'cube-grid', 'rotating-dots'. The input defaults to 'rotating-square',
and if you forget to input a value, that's what will show up.

`spinnerColor`: A simple string (red) or hex formatted color (#ff0000). The default color is #333, so if you don't pass
anything in, that's what you'll get.
