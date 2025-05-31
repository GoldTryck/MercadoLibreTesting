const { I } = inject();

class ResultsPage {

    constructor() {
        this.filters = {
          byText: (text) => locate("span.ui-search-filter-name").withText(text),
          byPrice: (sort_order) =>
            locate("span.andes-list__item-primary").withText(sort_order),
        };
        this.buttons = {
            sortByPrice: locate('button.andes-dropdown__trigger')
        }
    }

    applyFilter(condition) {
        I.say(`Filtering by condition: ${condition}`);
        const conditionFilter = this.filters.byText(condition);
        I.waitForElement(conditionFilter, 10);
        I.click(conditionFilter);
        I.say(`Selected condition: ${condition}`);
    }

    sortByPrice(sort_order) {
        I.say(`Sorting by price: ${sort_order}`);
        I.waitForElement(this.buttons.sortByPrice, 10);
        I.click(this.buttons.sortByPrice);

        I.waitForElement(this.filters.byPrice(sort_order), 10);
        I.click(this.filters.byPrice(sort_order));
        I.say(`Selected sort order: ${sort_order}`);
    }

    async getElementsDetails(){
        I.usePuppeteerTo("Get the first 5 products details", async ({ page }) => {
            const items = await page.$$('div.poly-card__content');

            for (let i = 0; i < Math.min(items.length, 5); i++) {
                const item = items[i];
                const name = await item.$eval(
                  "h3.poly-component__title-wrapper",
                  (el) => el.textContent.trim()
                );
                const price = await item.$eval(
                  "div.poly-price__current span.andes-money-amount__fraction",
                  (el) => el.textContent.trim()
                );
                console.log(`Product ${i + 1}: Name: ${name} Price: ${price}`);
            }
        });

    }

}
module.exports = new ResultsPage();