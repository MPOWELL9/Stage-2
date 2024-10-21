
// temporary cache, until we add the database.

let watchListData = [];

const addItem= (symbol) => {

    if(!Symbol) {
        console.log (' symbol is not vaild.')
    }
    
    console.log ('item ${symbol} added to watch list')

    //add symbol to watch list
    watchListDatta.push(symbol);
}


const removeItem=(symbol) => {
    
    if (!symbol){

   
    console.log('symbol is not valid.')
   
   }
   console.log('item ${symbol} removed from watch list')

   //filter out the symbol to remove

watchListData = watchListData.filter(item=> item !== symbol);


console.log('item$(symbol) removed from watch list')


} 




const getItems = () => {
    console.log(' watch list items fetched..')

    return watchListData;


}
modules.exports= {
    addItem,
    removeItem,
    getItems
}
