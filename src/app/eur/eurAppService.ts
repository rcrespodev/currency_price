import {EurCurrency} from "./eurCurrency";
import {BaseService} from "../commons/service/baseService";

export class EurAppService extends BaseService {
    GetEurPrice(): EurCurrency {
        const currentPrice = this._repository.GetCurrentPrices()
        const currentEur = currentPrice.bpi.EUR
        return <EurCurrency>this.ParseSchema("EUR", currentPrice, currentEur)
    }
}