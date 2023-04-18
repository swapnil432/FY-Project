import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Itempage from '../Itempage';
import slider from '../slider/slider.json';


const Carouselpage = () => {
    
    return (

        <Carousel>
            {
                slider.map( item => <Itempage key={item.id} item={item} /> )
            }
        </Carousel>
    )
}
export default Carouselpage