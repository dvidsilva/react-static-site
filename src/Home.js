import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Page not found - React Website</title>
                    <meta name="description" content="Page not found" />
                    <meta property="og:title" content="Page not found - " />
                </Helmet>
                <h1>Welcome</h1>
                <p><strong>Homepage</strong></p>
            </div>
        );
    }
}

export default Home;
