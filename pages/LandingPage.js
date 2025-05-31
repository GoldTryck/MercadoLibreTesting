const { I } = inject();

class LandingPage {
    constructor() {

    this.locators = {
        country: (acronym) => `#${acronym}`,
    };
    }
    selectCountry(country) {
        switch (country) {
            case 'Argentina':
                this.country = this.locators.country('AR');
                break;
            case 'Brazil':
                this.country = this.locators.country('BR');
                break;
            case 'Chile':
                this.country = this.locators.country('CL');
                break;
            case 'Colombia':
                this.country = this.locators.country('CO');
                break;
            case 'Mexico':
                this.country = this.locators.country('MX');
                break;
            default:
                throw new Error(`Country ${country} is not supported`);
        }

        I.waitForElement(this.country, 10);
        I.click(this.country);
        I.say(`Selected country: ${country}`);
    }
}

module.exports = new LandingPage();