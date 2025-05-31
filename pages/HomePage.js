const { I } = inject();

class HomePage {
    constructor() {
        this.locators = {
          navBar: "#nav-bounds-with-cart",
        };
        this.fields = {
          search: "#cb1-edit",
        };
    }

    searchFor(term) {
        I.waitForElement(this.fields.search, 10);
        I.fillField(this.fields.search, term);
        I.pressKey('Enter');
        I.say(`Searching for: ${term}`);
    }
}

module.exports = new HomePage();