const { I } = inject();
const LandingPage = require('../pages/LandingPage');
const HomePage = require('../pages/HomePage');
const ResultsPage = require('../pages/ResultsPage');

Given('I am on the Mercado Libre landing page', () => {
    I.amOnPage('/');
});

Then('I select as country {string}', (country) => {
    LandingPage.selectCountry(country);
});

When('I search for {string}', (term) => {
    HomePage.searchFor(term);
});

Then('I filter by condition {string}', (condition) => {
    ResultsPage.applyFilter(condition);
});
Then('I filter by location {string}', (location) => {
    ResultsPage.applyFilter(location);

});

Then('I sort by price {string}', (sort_order) => {
    ResultsPage.sortByPrice(sort_order);

});

Then('I should see the name and price of the first 5 products', () =>{
    
    ResultsPage.getElementsDetails();
});