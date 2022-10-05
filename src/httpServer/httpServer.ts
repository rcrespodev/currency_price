import {AppModule} from "../api/module/app.module";
import {NestFactory} from "@nestjs/core";
import {NestExpressApplication} from "@nestjs/platform-express";
import * as hbs from 'hbs';
import {join} from "path";
import {QueryBusFactory} from "../app/queryBus";

export type NewHttpServerCommand = {
    host: string
    port: number
    files: {
        public: string
        views: string
        partials: string
    }
}

export class HttpServer {
    private readonly _port: number
    private readonly _host: string
    private readonly _appModule: AppModule
    private readonly _public: string
    private readonly _views: string
    private readonly _partials: string

    constructor(command: NewHttpServerCommand) {
        this._port = command.port
        this._host = command.host
        this._appModule = AppModule
        this._views = command.files.views
        this._public = command.files.public
        // this._partials = command.partials
    }

    Run() {
        // instance queryBus global
        new QueryBusFactory({
            prdRepository: false
        })

        // Run http server
        const bootstrap = async () => {
            const app = await NestFactory.create<NestExpressApplication>(this._appModule);
            app.useStaticAssets(this._public);
            app.setBaseViewsDir(this._views);
            hbs.registerPartials(join(this._views, 'partials'))
            app.setViewEngine('hbs')
            await app.listen(this._port, this._host, () => {
                console.log(`ApiCurrencyPrice listening on ${this._host}:${this._port}`)
                return
            });
        }
        bootstrap()
    }
}