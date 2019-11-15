import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import settingReducer from './settings/settings.reducer';
import homeReducer from './home/home.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['']
}

const rootReducer = combineReducers({
    settings : settingReducer,
    home : homeReducer
});

export default persistReducer(persistConfig, rootReducer);