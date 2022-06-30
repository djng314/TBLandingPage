import mongoose from 'mongoose';
let Schema = new mongoose.Schema({
    Name: String,
    Email: String

});
export default mongoose.models.Contacts || mongoose.model('Contacts', Schema)