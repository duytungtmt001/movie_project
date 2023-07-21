// import { Fragment } from 'react';
// import { Defaultlayout } from './layouts';
// import {publicRoutes} from './routes'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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
        <Slider {...settings}>
            <div>
                <img alt="" src={require("./assets/images/slider/1.jpg")} />
            </div>
            <div>
                <img alt="" src={require("./assets/images/slider/2.jpg")} />
            </div>
            <div>
                <img alt="" src={require("./assets/images/slider/3.jpg")} />
            </div>
            <div>
                <img alt="" src={require("./assets/images/slider/4.jpg")} />
            </div>
            <div>
                <img alt="" src={require("./assets/images/slider/5.jpg")} />
            </div>
        </Slider>
    );
}

export default App
 