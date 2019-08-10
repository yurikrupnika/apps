import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';

/**
 * @class UserSchema
 * @param {string} id id
 * @param {string} email email
 * @param {string} name name
 * @param {string} hashPassword hashPassword
 */
const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        required: true
    },
    email: { type: String, required: true },
    name: { type: String, required: true },
    hashPassword: String,
});

const Model = mongoose.model(dbModel, UserSchema);
Model.find({}).then((res) => {
    if (!res.length) {
        new Model({
            email: 'd@d.com',
            name: 'yuri',
            id: 'idiwrote',
            hashPassword: 'sd'
        }).save();
    }
});

export default Model;
export { UserSchema };
