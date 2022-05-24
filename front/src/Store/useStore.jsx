import { createStore,compose,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga' 
import rootSaga from '../sagas'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/es/integration/react'



const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enhancer = process.env.NODE_ENV === 'production'
? compose(applyMiddleware(...middleware))
: composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(rootReducer,enhancer) // rootReducer , enhancer
sagaMiddleware.run(rootSaga) // sagas/index.js

const persistor = persistStore(store)


const Store = ({children}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {children}
            </PersistGate>
        </Provider>
    )
}

export default Store

// npm install redux-saga
// npm install axios 