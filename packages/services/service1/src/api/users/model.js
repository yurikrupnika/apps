import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';

/**
 * @module UserSchema
 * @param {string} email email
 * @param {string} name name
 * @param {string} hashPassword hashPassword
 * @extends Schema.prototype
 * @returns {object}
 */
const UserSchema = new Schema({
    /**
     * @member id
     */
    id: {
        type: String,
        index: true,
        required: true
    },
    /**
     * @member {string} email
     */
    email: { type: String, required: true },
    /**
     * @member {string} name
     */
    name: { type: String, required: true },
    /**
     * @member {string} hashPassword
     */
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

// console.log('UserSchema', UserSchema);

export default Model;
export { UserSchema };
