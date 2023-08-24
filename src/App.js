import { Fragment } from 'react';
import { Defaultlayout } from './layouts';
import { publicRoutes } from './routes';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';
import ErrorPage from './components/ErrorPage';


function App() {
    const RoutesJSX = (
        publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = Defaultlayout;
            const loaderRoute =
                route.loader ||
                (() => {
                    return null;
                });

            if (route.layout) {
                Layout = route.layout;
            } else if (route.layout === null) {
                Layout = Fragment;
            }

            return (
                <Route
                    key={index}
                    path={route.path}
                    loader={loaderRoute}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                    errorElement={<ErrorPage />}
                />
            );
        })
    );

    const router = createBrowserRouter(createRoutesFromElements(RoutesJSX));
    
    return <RouterProvider router={router} fallbackElement={<Loading />}/>;
}

export default App;

