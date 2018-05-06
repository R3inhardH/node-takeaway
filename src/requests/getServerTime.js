import {reverse} from './util';

export default {
    parameters: ({country, restaurantId, orderMode}) => [
        'getcurrenttime',
        country,
        restaurantId,
        orderMode
    ],
    response: reverse({})
};
