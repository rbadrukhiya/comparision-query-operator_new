const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:({
        type:String
    }),
    email:({
        type:String
    }),
    city:({
        type:String
    }),
    products:({
        type:Number
    }),
    multiple:[Schema.Types.Mixed]
    
})

const MyModel = mongoose.model('schema', schema);

module.exports  = MyModel
