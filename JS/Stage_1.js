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
    },
};

currencyConverter.init();
