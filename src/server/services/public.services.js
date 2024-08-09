const {ROUTES} = require("../constants/api.routes");
const {axiosClient} = require("../functions/axios.client")

const getItemsSearch = async (query, limit) => {
    const response = await axiosClient.get(ROUTES.SEARCH, { params : { q: query, limit: limit} })
    return response.data.results;
}

const getItemData = async (id) => {
    const response = await axiosClient.get(ROUTES.ITEM.replace("{0}", id))
    return response.data;
}

const getItemDescription = async (id) => {
    const response = await axiosClient.get(ROUTES.ITEM_DESCRIPTION.replace("{0}", id))
    return response.data.plain_text;
}

const getCategories = async (categoriesArray) => {
    const categoryPromises = categoriesArray.map(async (category) => {
        const categoryResponse = await axiosClient.get(ROUTES.CATEGORIES.replace("{0}", category));
        return categoryResponse.data.name;
    });

    const categoryNames = await Promise.all(categoryPromises);
    return categoryNames;
}


module.exports = { getItemData, getItemDescription, getCategories, getItemsSearch}