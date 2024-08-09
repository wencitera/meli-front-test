const BASE_URL = "https://api.mercadolibre.com/";

const ROUTES = {
    SEARCH: "sites/MLA/search",
    ITEM: "items/{0}",
    ITEM_DESCRIPTION: "items/{0}/description",
    CATEGORIES: "/categories/{0}"
}

module.exports = { BASE_URL, ROUTES }