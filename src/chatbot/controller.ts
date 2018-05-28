import createService = require('./service');
import { ServiceConfig, ChatbotMessage } from './types';
import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import * as validation from './validation';

const createController = (config: ServiceConfig) =>
     async(req: Request, res: Response, next: NextFunction) => {
        try{
            const result = Joi.validate(req.body, Joi.object().keys(validation.messagevalidation));
            if(result.error !== null){
                next(result.error)
            }
            const service = await createService(config);
            const returnmessage = await service(req.body);
            res.json(returnmessage);
        }
        catch (e){
            console.log("send message failded", e)
            next(e);
        }
}

export = createController;