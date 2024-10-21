
const express = require('express');
//create instance of express app
const app = new express();
const watchListModule = require ('./modules/watchListModule');

const port = 3000;

//start express server on specific port
// add to list
app.listen(()=>{
    console.log('server started on ${port}')
})
//watchListModule.addItem('BTC');
//watchListModule.addItem('ADA');
//watchListModule.addItem('ETH');

//fetch the watch list
//console.log(watchListModule.getItems())

//remove ETH symbol
//watchListModule.removeItem('ETH');
//watchListModule.removeItem('ADA');

//fetch the watch list
//console.log(watchListModule.getItem())
