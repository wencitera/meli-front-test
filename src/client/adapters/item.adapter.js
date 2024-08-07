import Item from "../models/item";

export const createItemAdapter = (item) => (new Item(
    item.id,
    item.title,
    { 
        currency: item.sale_price?.currency_id, 
        amount: Math.floor(item.sale_price?.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
    },
    item.thumbnail,
    item.condition,
    item.shipping.free_shipping,
    'Buenos aires'
));

export const createItemListAdapter = (data) => {
    let items = [];
    data.results.map(item => (
        items = [...items, createItemAdapter(item)]
    ))
    return items;
}