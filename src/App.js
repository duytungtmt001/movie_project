import { Fragment } from 'react';
import { Defaultlayout } from './layouts';
import {publicRoutes} from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

function App() {

    return (
        // <BrowserRouter>
        //     <Routes>
        //         {publicRoutes.map((route, index) => {
        //             const Page = route.component;
        //             let Layout = Defaultlayout;

        //             if(route.layout) {
        //                 Layout = route.layout
        //             } else if(route.layout === null) {
        //                 Layout = Fragment
        //             }

        //             return (
        //                 <Route
        //                     key={index}
        //                     path={route.path}
        //                     element={
        //                         <Layout>
        //                             <Page />
        //                         </Layout>
        //                     }
        //                 />
        //             )
        //         })}
        //     </Routes>
        // </BrowserRouter>
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={5}
            // orientation="vertical"
            infinite={true}
        >
            <Slider>
                <Slide index={0}>
                    <img
                        alt=""
                        src="https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg"
                    />
                </Slide>
                <Slide index={1}>
                    <img
                        alt=""
                        src="https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg"
                    />
                </Slide>
                <Slide index={1}>
                    <img
                        alt=""
                        src="https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg"
                    />
                </Slide>
                <Slide index={1}>
                    <img
                        alt=""
                        src="https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg"
                    />
                </Slide>
                <Slide index={1}>
                    <img
                        alt=""
                        src="https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg"
                    />
                </Slide>
            </Slider>
            <ButtonBack
                disable={false}
                style={{
                    color: '#000',
                    backgroundColor: '#fff',
                    padding: '12px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                Back
            </ButtonBack>
            <ButtonNext
                disable={false}
                style={{
                    color: '#000',
                    backgroundColor: '#fff',
                    padding: '12px',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
            >
                Next
            </ButtonNext>
        </CarouselProvider>
    );
}

export default App
 