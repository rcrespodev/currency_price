export interface BaseCurrency {
    time: {
        updated: string,
        updatedISO: string,
        updateduk: string,
    },
    chartName: "Bitcoin",
    targetCurrency: ValidCurrencies,
    bpi: BaseRate
}

export type BaseRate = {
    code: string,
    symbol: string,
    rate: string,
    description: string,
    rate_float: number
}

export type ValidCurrencies = "USD" | "EUR" | "GBP"