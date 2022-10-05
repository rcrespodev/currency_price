import {GbpCurrency} from "./gbpCurrency";
import {BaseService} from "../commons/service/baseService";

export class GbpAppService extends BaseService {
    GetGbpPrice(): GbpCurrency {
        const currentPrice = this._repository.GetCurrentPrices()
        const currentGbp = currentPrice.bpi.GBP
        return <GbpCurrency>this.ParseSchema("GBP", currentPrice, currentGbp)
    }
}