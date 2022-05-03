require('file-loader?name=[name].[ext]!./index.html')

import React from 'react'
import { Provider} from 'react-redux'
import { createRoot } from 'react-dom/client'
import { persistStore } from 'reduxjs-toolkit-persist'
import App from './App.js'
import { store } from './Toolkit/Store/store.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

let persistor = persistStore(store)


root.render(
    <Router>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
        </Provider>
        
    </Router>
)