import { createStore, combineReducers, applyMiddleware } from 'redux';

import categories from './reducers/category';
import menus from './reducers/menu';
import orders from './reducers/order';
import transactions from './reducers/transaction';
import { logger } from './middleware';

const reducers = combineReducers({
    categories,
    menus,
    orders,
    transactions
})

const store = createStore(
    reducers,
    applyMiddleware(logger)
)

export default store