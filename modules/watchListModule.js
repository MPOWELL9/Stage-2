
const WatchItem = require('../models/watchItem');




const addItem= async(symbol) => {
    //clean up and add some erroe handlings...!!

    try{
        if(!Symbol) {
            console.log (' symbol is not vaild.')
        }
        
        console.log ('item ${symbol} added to watch list')
    
        //add symbol to watch list
    
        const item = new WatchItemModel ({
            symbol: symbol,
            dateCreated: Date.now()
        })
        
        await item.save();

    }

    catch (err) {
        console.log ('error adding item: ${err}')
    }


    }

    const removeItem = async(symbol) => {
    try {
        if (!symbol) {
            console.log ('symbol is not valid')
        }
    console.log('item ${symbol} removed from watch list')
        
        await WatchItem.deletOne({symbol: symbol});
    }
    catch (err){
    console.log('error removing item :${err}')
    }
    }
    const getItems = async () => {
    try{
    
    }
    catch (err){
console.log('error fetching items ${err}')
   
    }
    console.log(' watch list items fetched..')

    const items =await watchItem.find({})
    return items;
}

    module.exports= {
    addItem,
    removeItem,
    getItems
}
