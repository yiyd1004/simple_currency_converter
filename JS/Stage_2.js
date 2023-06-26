//const input = require("sync-input"); // To get user input in hyperskill.org
const input = require("prompt-sync")(); // To get user input in Node.js environment

const currencyConverter = {
    currencyTable: {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75,
    },

    init: function () {
        console.log(
            `Welcome to Currency Converter!\n` +
                `1 USD equals ${this.currencyTable.USD} USD\n` +
                `1 USD equals ${this.currencyTable.JPY} JPY\n` +
                `1 USD equals ${this.currencyTable.EUR} EUR\n` +
                `1 USD equals ${this.currencyTable.RUB} RUB\n` +
                `1 USD equals ${this.currencyTable.GBP} GBP`
        );

        this.run();
    },

    run: function () {
        console.log(
            `I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP\n` +
                "Type the currency you wish to convert: USD"
        );
        const currencyFrom = `USD`;

        const currencyTo = input(`To: `).toUpperCase();
        if (this.currencyTable[currencyTo] === undefined) {
            console.log(`Unknown currency`);
            return;
        }

        const amount = input(`Amount: `);
        if (amount < 1) {
            console.log(`The amount cannot be less than 1`);
            return;
        } else if (isNaN(Number(amount))) {
            console.log(`The amount has to be a number`);
            return;
        }

        console.log(
            `Result: ${amount} ${currencyFrom} equals ${(
                amount * this.currencyTable[currencyTo]
            ).toFixed(4)} ${currencyTo}`
        );
    },
};

currencyConverter.init();
