const { AUTHOR } = require("../constants/models");

const adaptItems = (items, categories) => {
    const formattedItems = {
        author: AUTHOR,
        categories: categories,
        items: items.map(item => ({
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 0
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            location: item.location !== undefined ? item.location.city.name : ''
        }))
    };

    return formattedItems;
}


const adaptItemDetail = (itemData, description, categoryName) => {
    return {
        author: AUTHOR,
        category: categoryName,
        item: {
            id: itemData.id,
            category_id: itemData.category_id,
            title: itemData.title,
            price: {
                currency: itemData.currency_id,
                amount: itemData.price,
                decimals: 0
            },
            picture: itemData.thumbnail,
            condition: itemData.condition,
            free_shipping: itemData.shipping.free_shipping,
            sold_quantity: itemData.sold_quantity || 0,
            description: description
        }
    };
}



module.exports = {
    adaptItems,
    adaptItemDetail,
};