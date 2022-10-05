import {CommandBus} from "ts-cqrs/build/esm/command/commandBus";

export class BaseController {
    private readonly _commandBus: CommandBus

    constructor(commandBus: CommandBus) {
        this._commandBus = commandBus
    }

    GetCommandBus(): CommandBus {
        return this._commandBus;
    }
}