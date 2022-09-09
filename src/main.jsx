import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { HeroesApp } from './HeroesApp'
import {store} from './auth/store/store'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
        <HeroesApp />
        </Router>
    </Provider>
)
