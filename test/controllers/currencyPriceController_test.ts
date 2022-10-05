import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from '../../src/api/controlles/app.controller';
import {AppService} from '../../src/api/services/app.service';
import {CurrencyPriceController} from "../../src/api/controlles/currencyPriceController";
import {EurObject, GbpObject, UsdObject} from "./testData";
import {QueryBusFactory} from "../../src/app/queryBus";

describe('Currency Price Controller with Mock Repository', () => {
    let currencyPriceController: CurrencyPriceController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [CurrencyPriceController],
        }).compile();

        currencyPriceController = app.get<CurrencyPriceController>(CurrencyPriceController);

        // instance queryBus global
        new QueryBusFactory({
            prdRepository: false
        })
    });

    describe('USD', () => {
        it('should return USD data', () => {
            expect(currencyPriceController.getUsd()).toStrictEqual(UsdObject);
        });
    });

    describe('GBP', () => {
        it('should return GBP data', () => {
            expect(currencyPriceController.getGbp()).toStrictEqual(GbpObject);
        });
    });

    describe('EUR', () => {
        it('should return EUR data', () => {
            expect(currencyPriceController.getEur()).toStrictEqual(EurObject);
        });
    });
});
