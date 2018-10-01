import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as contentful from 'contentful';
import registerServiceWorker from './registerServiceWorker';

var client = contentful.createClient({
    space: 'mi63ncym1bm5',
    accessToken: 'bc8f1c5df7025a43ef6477fc5f29a9de736de20bc66378c93fd5674531e5f87e'
})

client.getEntries().then(entries => {
    entries.items.forEach(entry => {
        if(entry.fields) {
            console.log(entry.fields)
        }
    })
})

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
