
import { axiosClient } from '../models/api.url';
import { loadAbort } from '../utils/load-abort-axios.utility';

export const getItemsBySearch = (search) => {
    const controller = loadAbort();

    return {
        call: axiosClient.get(`items`, { signal: controller.signal, params : { q: search, limit: 4} }),
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