import {Controller, Get, Render} from "@nestjs/common";
import {BaseCurrency, BaseRate, ValidCurrencies} from "../../app/commons/domain/baseCurrency";
import {queryBus} from "../../app/queryBus";
import {BaseQuery} from "ts-cqrs/build/esm/query/baseQuery";
import {randomUUID} from "crypto";
import {Query} from "ts-cqrs/build/esm/query/query";

@Controller()
export class CurrencyPriceController {
    @Get('currency-price/USD')
    @Render('currentPrice')
    getUsd(): CurrencyControllerResponse {
        return {
            currency: this.getCurrency("USD")
        }
    }

    @Get('currency-price/GBP')
    @Render('currentPrice')
    getGbp(): CurrencyControllerResponse {
        return {
            currency: this.getCurrency("GBP")
        }
    }

    @Get('currency-price/EUR')
    @Render('currentPrice')
    getEur(): CurrencyControllerResponse {
        return {
            currency: this.getCurrency("EUR")
        }
    }

    private getCurrency(queryId: string): BaseCurrency {
        const queries: Query<any, BaseCurrency>[] = []
        const q = new BaseQuery<any, BaseCurrency>(queryId, randomUUID(), {})
        queries.push(q)
        queryBus.Handle(queries)
        return this.parseQueries(queries)
    }

    private parseQueries(queries: Query<any, BaseCurrency>[]): BaseCurrency {
        if (queries.length > 1) {
            return
        }

        let currency: BaseCurrency
        queries.forEach((query) => {
            const data = query.Data()
            currency = {
                time: data.time,
                chartName: data.chartName,
                bpi: data.bpi,
                targetCurrency: data.targetCurrency
            }
        })
        return currency
    }
}

export type CurrencyControllerResponse = {
    currency: BaseCurrency
}