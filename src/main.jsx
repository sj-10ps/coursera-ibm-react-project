import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import AppRouter from './AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
)
