# walkthrough

## Description

This app represents my own implementation of the openUI5 Walkthrough tutorial at

https://sdk.openui5.org/topic/3da5f4be63264db99f2e5b04c5e853db

The scaffolding was created with the Easy-ui5 Yeoman generator

https://github.com/SAP/generator-easy-ui5

## Requirements

Either [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management.

## Preparation

Use `npm` (or `yarn`) to install the dependencies:

```sh
npm i
```

(To use yarn, just do `yarn` instead.)

## Run CORS anywhere Proxy if needed (untested - does not work with SAP BTP Trial)

```sh
npm run proxy
```

## Run the App

Execute the following command to run the app locally for development in watch mode (the browser reloads the app automatically when there are changes in the source code):

```sh
npm start
```

As shown in the terminal after executing this command, the app is then running on http://localhost:8080/index.html. A browser window with this URL should automatically open.

(When using yarn, do `yarn start` instead.)

## Build the App

### Unoptimized (but quick)

Execute the following command to build the project and get an app that can be deployed:

```sh
npm run build
```

The result is placed into the `dist` folder. To start the generated package, just run

```sh
npm run start:dist
```

Note that `index.html` still loads the UI5 framework from the relative URL `resources/...`, which does not physically exist, but is only provided dynamically by the UI5 tooling. So for an actual deployment you should change this URL to either [the CDN](https://openui5.hana.ondemand.com/#/topic/2d3eb2f322ea4a82983c1c62a33ec4ae) or your local deployment of UI5.

(When using yarn, do `yarn build` and `yarn start:dist` instead.)

### Optimized

For an optimized self-contained build (takes longer because the UI5 resources are built, too), do:

```sh
npm run build:opt
```

To start the generated package, again just run:

```sh
npm run start:dist
```

In this case, all UI5 framework resources are also available within the `dist` folder, so the folder can be deployed as-is to any static web server, without changing the bootstrap URL.

With the self-contained build, the bootstrap URL in `index.html` has already been modified to load the newly created `sap-ui-custom.js` for bootstrapping, which contains all app resources as well as all needed UI5 JavaScript resources. Most UI5 resources inside the `dist` folder are for this reason actually **not** needed to run the app. Only the non-JS-files, like translation texts and CSS files, are used and must also be deployed. (Only when for some reason JS files are missing from the optimized self-contained bundle, they are also loaded separately.)

(When using yarn, do `yarn build:opt` and `yarn start:dist` instead.)

## Check the Code

To lint the code, do:

```sh
npm run lint
```

(Again, when using yarn, do `yarn lint` instead.)

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.

## Implemented Parts of the Walkthrough

* [Done] Step 1: Hello World!
* [Done] Step 2: Bootstrap
* [Done] Step 3: Controls
* [Done] Step 4: XML Views
* [Done] Step 5: Controllers
* [Done] Step 6: Modules
* [Done] Step 7: JSON Model
* [Done] Step 8: Translatable Texts
* [Done] Step 9: Component Configuration
* [Done] Step 10: Descriptor for Applications
* [Done] Step 11: Pages and Panels
* [Done] Step 12: Shell Control as Container
* [Done] Step 13: Margins and Paddings
* [Done] Step 14: Custom CSS and Theme Colors
* [Done] Step 15: Nested Views
* [Done] Step 16: Dialogs and Fragments
* [Done] Step 17: Fragment Callbacks
* [Done] Step 18: Icons
* [Done] Step 19: Aggregation Binding
* [Done] Step 20: Data Types
* [Done] Step 21: Expression Binding
* [Done] Step 22: Custom Formatters
* [Done] Step 23: Filtering
* [Done] Step 24: Sorting and Grouping
* [Failed] Step 25: Remote OData Service using node.js based CORS proxy "cors-anywhere"
* Step 26: Mock Server Configuration
* Step 27: Unit Test with QUnit
* Step 28: Integration Test with OPA
* Step 29: Debugging Tools
* Step 30: Routing and Navigation
* Step 31: Routing with Parameters
* Step 32: Routing Back and History
* Step 33: Custom Controls
* Step 34: Responsiveness
* Step 35: Device Adaptation
* Step 36: Content Density
* Step 37: Accessibility



