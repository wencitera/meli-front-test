
import { axiosClient } from '../models/api.url';
import { loadAbort } from '../utils/load-abort-axios.utility';

export const getItemsBySearch = (search, limit) => {
    const controller = loadAbort();

    return {
        call: axiosClient.get(`items`, { signal: controller.signal, params : { q: search, limit: limit} }),
        controller
    }
}

export const getItemsById = (id) => {
    const controller = loadAbort();

    return {
        call: axiosClient.get(`items/${id}`, { signal: controller.signal }),
        controller
    }
}