# Cleo FE Tech Test

A simple application to show a list of bills and potential bills with the ability to change each bill type status.

The application uses:

- React with Typescript
- Sass
- Webpack for bundling

Eslint, Stylelint and prettier are also being used.

The applicatoin is made up of two routes, a home pae and a bills page. The Bills page has a tabs component showing two tabs called 'Bills' and 'Potential Bills'. When clicking on the Bills tab a list of bills is shows and clicking on the potential bills tab the list of potential bills is shown. Under each bill is an action to change the status to potential bill if currently a bill and bill if a potential bill. Under each bull or potential bill is anoter action to show all the transactions related to the item.

## Running the application

- npm start - startes the application in development mode
- npm run api - starts the json-server mock api
- npm run test:unit - runs the unit tests
