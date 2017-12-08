import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

export default class App extends React.Component {
    static get propTypes() {
        return {
            route: PropTypes.object.isRequired,
        };
    }

    render() {
        const { route } = this.props;
        return(
            <div>
                <Header />
                { renderRoutes(route.routes) }
                <Footer />
            </div>
        );
    }
}
