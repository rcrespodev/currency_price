import {CurrencyRepository, CurrencySchema} from "../domain/currencyRepository";

export class MockCurrencyRepository implements CurrencyRepository {
    GetCurrentPrices(): CurrencySchema {
        return {
            "time": {
                "updated": "Oct 4, 2022 22:00:00 UTC",
                "updatedISO": "2022-10-04T22:00:00+00:00",
                "updateduk": "Oct 4, 2022 at 23:00 BST"
            },
            "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
            "chartName": "Bitcoin",
            "bpi": {
                "USD": {
                    "code": "USD",
                    "symbol": "&#36;",
                    "rate": "20,310.8137",
                    "description": "United States Dollar",
                    "rate_float": 20310.8137
                },
                "GBP": {
                    "code": "GBP",
                    "symbol": "&pound;",
                    "rate": "16,971.5534",
                    "description": "British Pound Sterling",
                    "rate_float": 16971.5534
                },
                "EUR": {
                    "code": "EUR",
                    "symbol": "&euro;",
                    "rate": "19,785.6979",
                    "description": "Euro",
                    "rate_float": 19785.6979
                }
            }
        };
    }
}