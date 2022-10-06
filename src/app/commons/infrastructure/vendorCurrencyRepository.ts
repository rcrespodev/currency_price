import {CurrencyRepository, CurrencySchema} from "../domain/currencyRepository";

export class VendorCurrencyRepository implements CurrencyRepository {
    private data: CurrencySchema

    async setup() {
        const fetchData = async () => {
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            const jsonResponse = await response.json()
            return jsonResponse
        }

        this.data = await fetchData()
        console.log(this.data)
    }

    GetCurrentPrices(): CurrencySchema {
        this.setup()
        return this.data
    }
}