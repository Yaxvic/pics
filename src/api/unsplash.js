import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID kDmQLtgRVI6VlQD8yULIbHjXAP3jSI_HhjIHlkMyr_Q'
    }
});