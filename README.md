# Cleo FE Tech Test

A simple application to show a list of bills and potential bills with the ability to change each bill type status.

The application uses:

- React with Typescript
- Sass
- Webpack for bundling

Eslint, Stylelint and prettier are also being used.

The applicatoin is made up of two routes, a home page and a bills page. The Bills page has a tabs component showing two tabs called 'Bills' and 'Potential Bills'. When clicking on the Bills tab a list of bills is shows and clicking on the potential bills tab the list of potential bills is shown. Under each bill is an action to change the status to potential bill if currently a bill and bill if a potential bill. Under each bull or potential bill is anoter action to show all the transactions related to the item.

I roughly spent around 4 hours on this task. I have covered all the functionality and included some basic unit tests. With more time I would have covered the following:

- More unit testing
- Functional testing usisg a tool such as Cypress
- Cross browser testing
- Accessibility testing

## Running the application

- npm start - starts the application in development mode
- npm run api - starts the json-server mock api
- npm run test:unit - runs the unit tests
