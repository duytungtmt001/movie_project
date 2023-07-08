import { Fragment, useEffect, useRef, useState } from 'react';
import { Defaultlayout } from './layouts';
import {publicRoutes} from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tippy from '@tippyjs/react/headless';

import {motion, useSpring} from 'framer-motion'

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

    // return (
    //     <Tippy
    //         render={() => 
    //             <motion.div>
    //                 Good morning
    //             </motion.div>
    //         }
    //     >
    //         <button>Click me</button>
    //     </Tippy>
    // )
}

export default App;
