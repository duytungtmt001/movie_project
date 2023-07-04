import { Fragment, useRef, useState } from 'react';
import { Defaultlayout } from './layouts';
import { publicRoutes } from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tippy from '@tippyjs/react/headless';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [mount, setMount] = useState(false);

    const variants = {
        visible: { y: 50 },
        hidden: { y: 0 },
    };

    return (
        <Tippy
            interactive
            placement="bottom"
            render={() =>
                mount && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                        transition={{ duration: 1 }}
                        style={{
                            width: '100px',
                            height: '50px',
                            backgroundColor: '#333',
                        }}
                    >
                        Hi ae!
                    </motion.div>
                )
            }
            onShow={() => setMount(!mount)}
            onHide={() => setMount(!mount)}
        >
            <button
                style={{ padding: '20px', backgroundColor: 'red' }}
                onClick={() => setMount(!mount)}
            >
                Mount
            </button>
        </Tippy>
        // <Fragment>
        //     <button
        //         style={{padding: '20px', backgroundColor: 'red'}}
        //         onClick={() => setMount(!mount)}
        //     >
        //         Mount
        //     </button>
        // <AnimatePresence>
        //     {mount && <motion.div
        //         animate={{ y: 50 }}
        //         exit={{ y: 0 }}
        //         transition={{duration: 1}}
        //         style={{
        //             width: '100px',
        //             height: '50px',
        //             backgroundColor: '#333'
        //         }}
        //     >
        //         Hi ae!
        //     </motion.div>}
        // </AnimatePresence>
        // </Fragment>
    );

    // return (
    //     <BrowserRouter>
    //         <Routes>
    //             {publicRoutes.map((route, index) => {
    //                 const Page = route.component;
    //                 let Layout = Defaultlayout;

    //                 if(route.layout) {
    //                     Layout = route.layout
    //                 } else if(route.layout === null) {
    //                     Layout = Fragment
    //                 }

    //                 return (
    //                     <Route
    //                         key={index}
    //                         path={route.path}
    //                         element={
    //                             <Layout>
    //                                 <Page />
    //                             </Layout>
    //                         }
    //                     />
    //                 )
    //             })}
    //         </Routes>
    //     </BrowserRouter>
    // )
}

export default App;
