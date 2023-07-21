import { useEffect, useState } from 'react';
import SliderMain from '../../components/Slider';

import { sliderMain } from '../../apiServices';

function Home() {
    const [dataSliderMain, setDataSliderMain] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                let data = await sliderMain();
                if(data !== []) {
                    const prev1 = data[data.length-1];
                    const prev2 = data[data.length-2];
                    data = [
                        prev2,
                        prev1,
                        ...data,
                        ...data,
                    ]
                }
                setDataSliderMain(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    return (
        dataSliderMain.length > 0 && <SliderMain data={dataSliderMain} sliderWidth={600} />
    );
}

export default Home;
