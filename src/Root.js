import React from 'react';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

class Root extends React.Component {
    static get propTypes() {
        return {
            css: PropTypes.array,
            js: PropTypes.array,
            location: ReactRouterPropTypes.location.isRequired,
            title: PropTypes.string,
            description: PropTypes.string,
        };
    }

    render() {
        const { css = [], js = [], location = '/' } = this.props;
        return (
            <html lang="en" dir="ltr">
                <head>
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
                    <title>Welcome to my website</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, width=device-width, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
                    <meta name="description" content="This website was made using react" />
                    {css.map((file, i) => {
                        return (<link href={`/${file}`} key={i} rel="stylesheet" />);
                    })}
                </head>
                <body>
                    <div id="root">
                        <StaticRouter location={location} context={this.props}>
                            { renderRoutes(Routes) }
                        </StaticRouter>
                    </div>
                    {js.map((file, i) => {
                        return  <script src={`/${file}`} key={i} async />;
                    })}
                </body>
            </html>
        );
    }
}

export default Root;
