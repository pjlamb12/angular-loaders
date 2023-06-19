# ng-loaders Package

Install the package with the following command:

```sh
npm install ng-loaders
```

## Setting the `spinnerType`

You can change the spinner that displays by setting the `spinnerType` input on the component. The color is changed by updating the `--spinnerColor` CSS variable.

## Set the Default `spinnerType`

The library uses an InjectionToken to set the default `spinnerType`. This makes it so you don't have to provide the `spinnerType` input on every ngx-loader component. You can set the default `spinnerType` in your root module or root app component like so:

```
providers: [
	{
		provide: NG_LOADERS_CONFIG,
		useFactory: () => ({ spinnerType: 'rotating-dots' }),
	}
],
```

## Styling the Loader

You can style the loader with a couple of CSS variables. The loader's color can be set with the `--spinnerColor` CSS variable. You can set the loader's overlay background color with the `--spinnerOverlayColor` CSS variable. You can set the loader's overlay opacity with the `--spinnerOverlayOpacity` CSS variable.
