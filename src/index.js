import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from '../src/App';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={zhCN} >
            <App />
        </LocaleProvider>

    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
