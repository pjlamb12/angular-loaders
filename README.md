# Angular Loaders

This is an Angular component library that gives you CSS loaders for your application. There are several options, all taken from [Tobias Ahlin](https://twitter.com/tobiasahlin)'s [SpinKit](http://tobiasahlin.com/spinkit/). They are pure HTML and CSS loaders. Just pass in the type of spinner you want and the color you want it to be in string (red) or hex format (#ff0000).

## Using the Component
Import it into your project, and then put it in your app using the selector `ng-loader`. There are two inputs: `spinnerType` and `spinnerColor`.

`spinnerType`: Choose one of the following values: 'rotating-square', 'pulsing-circles', 'growing-bars', 'rotating-cubes', 'growing-circle', 'ellipsis', 'cube-grid', 'rotating-dots'. The input defaults to 'rotating-square', and if you forget to input a value, that's what will show up.
`spinnerColor`: A simple string (red) or hex formatted color (#ff0000). The default color is #333, so if you don't pass anything in, that's what you'll get.

## Contributing to the Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
