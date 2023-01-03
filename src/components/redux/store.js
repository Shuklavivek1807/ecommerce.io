import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./reducer";
import {persistStore,persistReducer} from 'redux-persist'
import  storage  from "redux-persist/lib/storage";

const persistConfig={
    key: 'main-root' ,
    storage,
}
const persistedReducer=persistReducer(persistConfig,rootReducer);
const store=legacy_createStore(persistedReducer,applyMiddleware());
const Persistor=persistStore(store);

export{Persistor}
export default store;