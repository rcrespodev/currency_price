import {QueryHandler} from "ts-cqrs/build/esm/query/queryHandler";
import {Query} from "ts-cqrs/build/esm/query/query";
import {UsdCurrency} from "./usdCurrency";
import {UsdAppService} from "./usdAppService";

export class UsdQueryHandler implements QueryHandler<any, UsdCurrency>{
    private readonly _usdService: UsdAppService

    constructor(usdService: UsdAppService) {
        this._usdService = usdService
    }

    Handle(query: Query<any, UsdCurrency>): void {
        const usdCurrency = this._usdService.GetUsdPrice()
        query.SaveData(usdCurrency)
        return
    }
}