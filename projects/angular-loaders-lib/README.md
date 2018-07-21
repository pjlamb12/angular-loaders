# Angular Loaders

This is an Angular component library that gives you CSS loaders for your application. There are several options, all
taken from [Tobias Ahlin](https://twitter.com/tobiasahlin)'s [SpinKit](http://tobiasahlin.com/spinkit/). They are pure
HTML and CSS loaders. Just pass in the type of spinner you want and the color you want it to be in string (red) or hex
format (#ff0000).

## Using the Component

Import it into your project, and then put it in your app using the selector `ngx-loader`.

When importing, don't forget to use the `forRoot` method and pass in a config object with `color` and `type`. Those will be the specified default for your app. Then, when you use the selector with no inputs, that's what you'll get to start with. you'll still be able to override those values if you choose, but this let's you start with the color and loader you want.

    NgLoadersModule.forRoot({ color: 'black', type: 'rotating-square' });

There are two inputs:
`spinnerType` and `spinnerColor`.

`spinnerType`: Choose one of the following values: 'rotating-square', 'pulsing-circles', 'growing-bars',
'rotating-cubes', 'growing-circle', 'ellipsis', 'cube-grid', 'rotating-dots'.

`spinnerColor`: A simple string (red) or hex formatted color (#ff0000).
