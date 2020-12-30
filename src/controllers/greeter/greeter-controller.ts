import { GreeterService } from '@service/greeter-service';
import express from 'express';
import { Inject } from 'typescript-ioc';

export class GreeterController {

    private greeterService: GreeterService;

    constructor(@Inject greeterService: GreeterService) {

        this.greeterService = greeterService;
    }

    public async get(req: express.Request, res: express.Response): Promise<void> {

        const greeting = this.greeterService.greet(req.query.name as string);

        res.send(greeting);
    }
}