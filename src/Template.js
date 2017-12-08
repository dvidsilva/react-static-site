import React from 'react';
import icon from './assets/images/favicon.ico';
import PropTypes from 'prop-types';

export default class Template extends React.Component {
    static get propTypes() {
        return {
            children: PropTypes.object,
        };
    }

    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/styles.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
                    <link rel="icon" href={icon} />
                </head>
                <body>
                    <div id="outlet" className="container">
                        {this.props.children}
                    </div>
                    <script src="/bundle.js" />
                </body>
            </html>
        );
    }
}
