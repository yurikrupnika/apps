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

/**
 * @swagger
 * /users/schema:
 *   get:
 *     tags:
 *       - Users
 *     name: Find user
 *     summary: Finds a users
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       200:
 *         description: A single user object
 *         schema:
 *           $ref: '#/definitions/User'
 *       401:
 *         description: No auth token
 */
route.get(`${url}/schema`, schema(Model));

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     name: Find user
 *     summary: Finds a users
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       200:
 *         description: A single user object
 *         schema:
 *           $ref: '#/definitions/User'
 *       401:
 *         description: No auth token
 */

route.get(url, list(Model)); // array
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     name: get user 1
 *     summary: Finds a user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       200:
 *         description: A single user object
 *         schema:
 *           $ref: '#/definitions/User'
 *       401:
 *         description: No auth token
 */
route.get(`${url}/:id`, find(Model)); // object
/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     name: create user
 *     summary: Create a user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       200:
 *         description: A single user object
 *         schema:
 *           $ref: '#/definitions/User'
 *       401:
 *         description: No auth token
 */
route.post(url, create(Model));
/**
 * @swagger
 * /users:
 *   put:
 *     tags:
 *       - Users
 *     name: create user
 *     summary: Create a user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       200:
 *         description: A single user object
 *         schema:
 *           $ref: '#/definitions/User'
 *       401:
 *         description: No auth token
 */
route.put(url, update(Model));
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     name: create user
 *     summary: Create a user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       200:
 *         description: A single user object
 *         schema:
 *           $ref: '#/definitions/User'
 *       401:
 *         description: No auth token
 */
route.delete(`${url}/:id`, removeOne(Model)); // id

export default route;
