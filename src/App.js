// import { Fragment } from 'react';
// import { Defaultlayout } from './layouts';
// import {publicRoutes} from './routes'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
function App() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        centerMode: true,
        easing: "ease-out",
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
        <div style={{width: "50vw", margin: "0 auto"}}>
            <Slider {...settings}>
                <div>
                    <img alt="" width="100%" src={require("./assets/images/slider/1.jpg")} />
                </div>
                <div>
                    <img alt="" width="100%" src={require("./assets/images/slider/2.jpg")} />
                </div>
                <div>
                    <img alt="" width="100%" src={require("./assets/images/slider/3.jpg")} />
                </div>
                <div>
                    <img alt="" width="100%" src={require("./assets/images/slider/4.jpg")} />
                </div>
                <div>
                    <img alt="" width="100%" src={require("./assets/images/slider/5.jpg")} />
                </div>
            </Slider>
        </div>
    );
}

export default App
 