# Overview

Pegasus is a tool for developers, which helps them visualise various aspects of the WhereIsMyTransport platform.

### The project techstack

|The thing|... and what it is for|
|:--------|:-----------|
|[Node (v6)](https://nodejs.org)|a javascript runtime that uses an event-driven, non-blocking I/O model - (**npm** is the package manager for node)|
|[React](https://facebook.github.io/react/)|a view layer for dynamic web apps|
|[Webpack](https://webpack.github.io)|a module bundler for javascript projects|
|[Leaflet](http://leafletjs.com/)|open-source JavaScript library for mobile-friendly interactive maps|
|[Karma](http://karma-runner.github.io/1.0/config/configuration-file.html)|a unit testing framework|

The rest of this document breaks down the project in terms of:

- **Features**: what the application contains
- **Usage**: how to install and run the app
- **Architecture**: how the application is structured
- **Extending Hydra**: how to add more concepts to the webapp

By the end of the document, you should be able to begin your Hydra dev journey.

# 1. Features

This project consists of various features that demonstrate the capabilities of the WhereIsMyTransport platform.

### Journey Planner

The journeys feature lets you explore multimodal features using the [`journeys`](https://developer.whereismytransport.com/documentation#journeys) endpoint of the WhereIsMyTranpsort platform.

[![](./docs/hydra-journeys.png)](http://localhost:7979/journeys?start=-33.92370529770908,18.47110748291016&end=-33.94578085758697,18.377380371093754)

### Agencies Explorer

The agencies feature lets you explore an agency's network. This includes their `lines`, `stops` and the respective timetables. Spatial querying is also supported.

[![](./docs/hydra-agencies.png)](http://localhost:7979/agencies)

### Signboards

Here you can view the line/stop timetable of a particular agency's lines/stops, as you would see them on a signboard.

[![](./docs/hydra-signboards.png)](http://localhost:7979/signboards) 
### Availability Metrics

This UI shows our metrics of availability and uptime of our various products.

[![](./docs/hydra-availability.png)](http://localhost:7979/availability)

# 2. Usage

## Install & Run

### Continuous Development

- `git clone https://whereismytransport.visualstudio.com/Product/_git/HydraUI`

- `npm run setup`

OR

- `npm install`
- `npm start`

Locally, the webapp is served on [http://localhost:7979](http://localhost:7979)

### Production Package

To run the production release build and generate the `dist` folder, use the following commands:

Local:
- `npm run build` (locally)

Server:
- `bash build.sh` (build server)

### NPM scripts:

The project uses webpack as the module bundler `npm` scripts to run tasks. With these two combined you can build, run, package etc. your application. Several `npm` scripts have been created for basic common tasks, found in `package.json`. 

Run these scripts with the command `npm run {{script-name}}`:

| script        | action        |
| :------------- |:-------------|
|`"start"`|runs the dev server locally on the specified port|
| `"setup"`| installs all dependencies and runs the dev server|
|`"prod"`| runs the node application using `server.js`|
|`"test"`|runs unit tests using karma|
|`"build"`| creates a production build of the app in `./dist`|
|`"clean"`| deletes the `./dist` folder|

# 3. Application Architecture