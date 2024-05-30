import React from 'react';
import './Carousel.css';
import Image1 from './1.png';
import Image2 from './2.png';
import Image3 from './3.png';
import Image4 from './4.png';
import Image5 from './5.png';

export const Carousel = () => {
    return (
        <div className='body'>
            <div className="box">
                <span style={{ '--i': 1 }}><img src={Image1} alt="Image 1" /></span>
                <span style={{ '--i': 2 }}><img src={Image2} alt="Image 2" /></span>
                <span style={{ '--i': 3 }}><img src={Image3} alt="Image 3" /></span>
                <span style={{ '--i': 4 }}><img src={Image4} alt="Image 4" /></span>
                <span style={{ '--i': 5 }}><img src={Image5} alt="Image 5" /></span>
            </div>
        </div>
    );
};

export default Carousel;
