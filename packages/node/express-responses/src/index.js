
/**
 *
 * responseId
 * @param {object} req
 * @param {object} res
 */
/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     name: Find user
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
const responseId = (req, res) => {
    const { id } = req.params;
    const responseBody = Array.isArray(id) ? id : [id];
    const statusCode = 202;
    return () => res.status(statusCode).json(responseBody);
};

const handleError = (res) => {
    const statusCode = 500;
    return err => res.status(statusCode).send(err);
};

const respondWithResult = res => entity => res.status(200).json(entity);

const list = Model => (req, res) => Model.find({})
    .then(respondWithResult(res))
    .catch(handleError(res));


const find = Model => (req, res) => Model.findOne({ _id: req.params.id })
    .then(respondWithResult(res))
    .catch(handleError(res));

const removeOne = Model => (req, res) => Model
    .findOneAndRemove({ _id: req.params.id })
    .then(responseId(req, res))
    .catch(handleError(res));

const create = Model => (req, res) => {
    const user = new Model(req.body);
    return user.save()
        .then(respondWithResult(res))
        .catch(handleError(res));
};

const update = Model => (req, res) => Model
    .findOneAndUpdate({
        _id: req.body._id // eslint-disable-line no-underscore-dangle
    }, req.body)
    .then(respondWithResult(res))
    .catch(handleError(res));

const schema = Model => (req, res) => res.json(Model.schema.tree);

export {
    list,
    find,
    removeOne,
    create,
    update,
    schema
};
