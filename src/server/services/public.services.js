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

const getCategoryById = async (category) => {
    const response = await axiosClient.get(ROUTES.CATEGORIES.replace("{0}", category));
    return response.data.name;
}

module.exports = { getItemData, getItemDescription, getItemsSearch, getCategoryById }