import {QueryHandler} from "ts-cqrs/build/esm/query/queryHandler";
import {Query} from "ts-cqrs/build/esm/query/query";
import {EurCurrency} from "./eurCurrency";
import {EurAppService} from "./eurAppService";

export class EurQueryHandler implements QueryHandler<any, EurCurrency>{
    private readonly _eurService: EurAppService

    constructor(eurService: EurAppService) {
        this._eurService = eurService
    }

    Handle(query: Query<any, EurCurrency>): void {
        const eurCurrency = this._eurService.GetEurPrice()
        query.SaveData(eurCurrency)
        return
    }
}