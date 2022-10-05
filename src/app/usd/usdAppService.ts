import {UsdCurrency} from "./usdCurrency";
import {BaseService} from "../commons/service/baseService";

export class UsdAppService extends BaseService {
    GetUsdPrice(): UsdCurrency {
        const currentPrice = this._repository.GetCurrentPrices()
        const currentUsd = currentPrice.bpi.USD
        return <UsdCurrency>this.ParseSchema("USD", currentPrice, currentUsd)
    }
}