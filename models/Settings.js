var mongoose = require('mongoose');

var SettingsSchema = new mongoose.Schema({
    version: String
})

mongoose.model('Settings',SettingsSchema);