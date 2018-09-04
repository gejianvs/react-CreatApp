import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware, compose  } from 'redux'
import { Provider } from 'react-redux'
import ReduxTrunk from 'redux-thunk';
import './index.css';
import App from '../src/App';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store'

const store = createStore(
    reducer,
    compose(
        applyMiddleware(ReduxTrunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={zhCN} >
            <App />
        </LocaleProvider>

    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
