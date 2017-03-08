# ReactLite Starter Kit [![Build Status](https://travis-ci.org/Kelvinmijaya/reactlite-starter-kit.svg?branch=master)](https://travis-ci.org/Kelvinmijaya/reactlite-starter-kit)

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app).

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/Kelvinmijaya/reactlite-starter-kit.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies

```bash
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

###DEMO

```bash
[React Lite App](http://reactlite.kelvinmijaya.com)
```

## Application Structure

The application structure using fractal structure, where functionality is grouped and named by feature / module, it's very useful for modularity.
```
.
├── build                                   # All build for 'npm run build'
├── public                                  # Public folder
│   └── index.html                          # Main HTML page container for app
└── src                                     # Application source code
    ├── common                              # Global Reusable Components
    ├── containers                          # Global Reusable Container Components
    ├── layouts                             # Components for major page structure
    ├── module                              # Main module definitions
    │   └── home                            # Fractal module
    │       ├── index.js                    # Module definitions include store and views
    │       ├── assets                      # Assets required
    │       ├── components                  # Components for module
    │       │   └── Counter                 # Component definitions for module
    │       │       ├── assets              # Assets required for component
    │       │       └── Counter.js          # Component views
    │       ├── redux                       # Collections of reducers/constants/actions for module
    │       │   ├── home.js                 # Reducers/constants/actions in home module
    │       │   └── home.test.js            # Test Script using jest
    │       └── views                       # Module views
    ├── reducers                            # Redux Reducers
    │   └── rootReducer.js                  # Root for all reducer
    ├── store                               # Redux store
    │   └── configureStore.js               # Instrument redux store
    ├── index.js                            # Server application entry point
    └── routes.js                           # Main application routes
```

## Available Scripts

|`npm <script>`|Description|
|------------------|-----------|
|`npm start`|Serves your app at `localhost:3000` to view it in the browser.|
|`npm run build`|Builds the app for production to the `build` folder.|
|`npm run eject`|If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.|
|`npm test`|Runs unit tests with jest.|

## Thank You

This project wouldn't be possible without inspired from the community, so thanks a lot for help and your inspired. so i can make this starter kit. and for all contributor Thank you for your hard work :)

* [Facebook Incubator](https://github.com/facebookincubator/create-react-app)
* [David Zukowski](https://github.com/davezuko)
* [Yansen Armandau](https://github.com/yansenarmandau)
