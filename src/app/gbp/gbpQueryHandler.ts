import {QueryHandler} from "ts-cqrs/build/esm/query/queryHandler";
import {Query} from "ts-cqrs/build/esm/query/query";
import {GbpCurrency} from "./gbpCurrency";
import {GbpAppService} from "./gbpAppService";

export class GbpQueryHandler implements QueryHandler<any, GbpCurrency>{
    private readonly _gbpService: GbpAppService

    constructor(gbpService: GbpAppService) {
        this._gbpService = gbpService
    }

    Handle(query: Query<any, GbpCurrency>): void {
        const gbpCurrency = this._gbpService.GetGbpPrice()
        query.SaveData(gbpCurrency)
        return
    }
}