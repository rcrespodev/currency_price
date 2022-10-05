import {Controller, Get, Render, Req} from '@nestjs/common';
import {AppService} from '../services/app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @Render('index')
    root(@Req() request: Request | undefined) {
        return {
            titulo: "bitcoin price"
        };
    }

    // @Get('/test')
    // @Render('index')
    // getTest() {
    //     return {
    //         titulo: "bitcoin price from test"
    //     };
    // }

    // getHello(): {
    //   // return this.appService.getHello();
    // }
}
