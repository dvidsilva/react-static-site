import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './Root';
let props = {};
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { renderRoutes } from 'react-router-config';

export default function render(locals, callback) {
    const assets = Object.keys(locals.webpackStats.compilation.assets);
    const css = assets.filter(value => value.match(/\.css$/));
    const js = assets.filter(value => value.match(/\.js$/));
    props = Object.assign({}, locals, { css }, { js }, { location: locals.path });
    const element = React.createElement(Root, props);
    const html = ReactDOMServer.renderToString(element);
    callback(null, `<!DOCTYPE html>${html}`);
}

if (typeof document !== 'undefined') {
    ReactDOM.hydrate(
        <BrowserRouter context={{}}>{renderRoutes(Routes)}</BrowserRouter>,
        document.getElementById('root')
    );
}
