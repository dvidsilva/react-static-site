import App from './App';
import Home from './Home';

const Routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
            },
        ]
    }
];

export default Routes;
