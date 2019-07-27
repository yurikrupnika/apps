import express from 'express';
import {
    list,
    find,
    removeOne,
    create,
    update,
    schema
} from '@krupnik/express-responses';
import { url } from './config';
import Model from './model';

const route = express.Router();

route.get(`${url}/schema`, schema(Model)); // array
route.get(url, list(Model)); // array
route.get(`${url}/:id`, find(Model)); // object
route.post(url, create(Model));
//
route.put(url, update(Model));

route.delete(`${url}/:id`, removeOne(Model)); // id

export default route;
