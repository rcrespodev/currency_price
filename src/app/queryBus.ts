import {NewQueryBusCommand, QueryBus} from "ts-cqrs/build/esm/query/queryBus";
import {Id} from "ts-cqrs/build/esm/valueObjects/id";
import {UsdQueryHandler} from "./usd/usdQueryHandler";
import {UsdAppService} from "./usd/usdAppService";
import {MockCurrencyRepository} from "./commons/infrastructure/mockCurrencyRepository";
import {CurrencyRepository} from "./commons/domain/currencyRepository";
import {GbpAppService} from "./gbp/gbpAppService";
import {BaseService} from "./commons/service/baseService";
import {GbpQueryHandler} from "./gbp/gbpQueryHandler";
import {EurAppService} from "./eur/eurAppService";
import {EurQueryHandler} from "./eur/eurQueryHandler";

export type QueryBusFactoryOptions = {
    prdRepository: boolean // true: use prd repository(https://api.coindesk.com/v1/bpi/currentprice.json). Otherwise use mock repo.
}

// new QueryBusFactory set the value of let queryBus if he is undefined.
// queryBus is a singleton that allow to build the bus and dependencies in the build of application or before each test.
export class QueryBusFactory {
    private readonly _repository: CurrencyRepository
    private readonly _usdService: UsdAppService
    private readonly _gbpService: GbpAppService
    private readonly _eurService: EurAppService
    private readonly _bus: QueryBus

    constructor(options: QueryBusFactoryOptions) {
        if (queryBus !== undefined) {
            return
        }

        switch (options.prdRepository) {
            case false:
                this._repository = new MockCurrencyRepository()
                break
            default:
                this._repository = new MockCurrencyRepository()
        }

        this._usdService = new UsdAppService(this._repository)
        this._gbpService = new GbpAppService(this._repository)
        this._eurService = new EurAppService(this._repository)

        this._bus = new QueryBus(
            [
                {
                    handler: new UsdQueryHandler(this._usdService), id: new Id("USD")
                },
                {
                    handler: new GbpQueryHandler(this._gbpService), id: new Id("GBP")
                },
                {
                    handler: new EurQueryHandler(this._eurService), id: new Id("EUR")
                },
            ]
        )
        queryBus = this.GetBus()
    }

    GetBus(): QueryBus {
        return this._bus;
    }
}

export let queryBus: QueryBus
// export const queryBus = new QueryBusFactory().GetBus()