
import { axiosClient } from '../models/api.url';
import { loadAbort } from '../utils/load-abort-axios.utility';

export const getItemsBySearch = (search) => {
    const controller = loadAbort();
    console.log(controller);
    return {
        call: axiosClient.get(`/search`, { signal: controller.signal, params : { q: search, limit: 4} }),
        controller
    }
}