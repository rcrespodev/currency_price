import {CurrencyRepository, CurrencySchema, RateSchema} from "../domain/currencyRepository";
import {GbpCurrency} from "../../gbp/gbpCurrency";
import {UsdCurrency} from "../../usd/usdCurrency";
import {BaseCurrency, ValidCurrencies} from "../domain/baseCurrency";

export class BaseService {
    protected readonly _repository: CurrencyRepository

    constructor(repository: CurrencyRepository) {
        this._repository = repository
    }

    protected ParseSchema(targetCurrency: ValidCurrencies, schema: CurrencySchema, targetBpi: RateSchema): BaseCurrency {
        const r = {
            chartName: "Bitcoin", targetCurrency: targetCurrency,
            time: {
                updated: schema.time.updated,
                updatedISO: schema.time.updatedISO,
                updateduk: schema.time.updateduk,
            },
            bpi: {
                code: targetBpi.code,
                symbol: targetBpi.symbol,
                rate: targetBpi.rate,
                description: targetBpi.description,
                rate_float: targetBpi.rate_float
            }
        }
        return <BaseCurrency>r
    }
}