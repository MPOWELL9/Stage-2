
const express = require('express');
const {connectToDb} = require ('./database/connectionManager')


//create instance of express app
const app = new express();
const watchListModule = require ('./modules/watchListModule');

const port = 3000;

// setup middleware

//define routes
app.get('/watchlist',async (req, res)=>{
    
     const data = await watchListModule.getItems()
    
    res.send(data);
})
// add to watchlist
app.post('/watchList', async(req,res)=> {
    //update express, uses request.query
    const { symbol } =req.query;
    console.log(JSON.stringify(req.query))

   await watchListModule.addItem(symbol);
    //no need to send back message, status 200 is enough 
    res.end();
    
})
//delete from watch list
app.delete('/watchList',async (req,res)=>{

    const{symbol} = req.query;
    await watchListModule.removeItem(symbol);
    res.send()
})



//====> let's connect to mongoDb and then start the express web server....

connectToDb().then(()=>{
    console.log('MongoDb connection completed..')


// start express server on specific port
app.listen(port, () => {
    console.log('Express server started on ${port}')
})
})


