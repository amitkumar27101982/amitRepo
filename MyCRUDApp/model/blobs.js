/**
 * Created by Amit on 24-04-2016.
 */
var mongoose = require('mongoose');
var blobSchema =  new mongoose.Schema({
    name:String,
    badge:Number,
    dob:{type:Date,default:Date.now},
    isloved:Boolean
});

mongoose.model('Blob', blobSchema);
