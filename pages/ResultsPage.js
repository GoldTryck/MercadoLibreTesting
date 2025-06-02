const { I } = inject();

class ResultsPage {

  constructor() {
    this.locators = {
      filterName: "span.ui-search-filter-name",
      priceSortItem: "span.andes-list__item-primary",
      sortByPriceButton: 'button.andes-dropdown__trigger',
      productCard: 'div.poly-card__content',
      productTitle: 'h3.poly-component__title-wrapper',
      productPrice: 'div.poly-price__current span.andes-money-amount__fraction'
    };
    this.filters = {
      byText: (text) => locate(this.locators.filterName).withText(text),
      byPrice: (sort_order) =>
        locate(this.locators.priceSortItem).withText(sort_order),
    };
    this.buttons = {
      sortByPrice: locate(this.locators.sortByPriceButton)
    };
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
      const items = await page.$$(this.locators.productCard);

      for (let i = 0; i < Math.min(items.length, 5); i++) {
        const item = items[i];
        const name = await item.$eval(
          this.locators.productTitle,
          (el) => el.textContent.trim()
        );
        const price = await item.$eval(
          this.locators.productPrice,
          (el) => el.textContent.trim()
        );
        console.log(`Product ${i + 1}: Name: ${name} Price: $${price}`);
      }
    });

  }

}
module.exports = new ResultsPage();