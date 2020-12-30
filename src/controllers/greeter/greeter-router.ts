import express from 'express';
import { Container } from 'typescript-ioc';
import { GreeterController } from './greeter-controller';

const urlPath = '/greeter';

const router = express.Router();

const greeterController = Container.get(GreeterController);

router.get(urlPath, (req, res) => {
    greeterController.get(req, res);
});

export { router as greeterRouter };