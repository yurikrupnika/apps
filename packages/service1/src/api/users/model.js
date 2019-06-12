import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';

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

new Model({
    email: 'd@d.com',
    name: 'yuri',
    id: 'idiwrote',
    hashPassword: 'sd'
}).save();

export default Model;
export { UserSchema };
