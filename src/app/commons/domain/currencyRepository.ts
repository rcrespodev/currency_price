export interface CurrencyRepository {
    GetCurrentPrices(): CurrencySchema
}

export type CurrencySchema = {
    time: {
        updated: string,
        updatedISO: string,
        updateduk: string
    },
    disclaimer: string,
    chartName: string,
    bpi: {
        USD: RateSchema
        GBP: RateSchema
        EUR: RateSchema
    }
}

export type RateSchema = {
    "code": string,
    "symbol": string,
    "rate": string,
    "description": string,
    "rate_float": number
}