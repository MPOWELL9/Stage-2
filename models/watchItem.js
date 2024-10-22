const mongoose = require ('mongoose');

const watchItemSchema = mongoose.Schema( {
    symbol: String,

});

const WatchItem= mongoose.Aggregate.model('WatchItem', watchItemSchema)

module.exports = WatchItem;