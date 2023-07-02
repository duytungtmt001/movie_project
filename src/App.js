import { Fragment, useRef } from 'react';
import { Defaultlayout } from './layouts';
import {publicRoutes} from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = Defaultlayout;

                    if(route.layout) {
                        Layout = route.layout
                    } else if(route.layout === null) {
                        Layout = Fragment
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
