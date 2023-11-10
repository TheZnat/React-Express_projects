import React, {useEffect} from 'react';
import {useState} from "react";
import './Slider.css';


const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    }

    const goToNext = ()=>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }

    const goToSlider = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    const elements = document.querySelectorAll('.sliderPhotoBar--item');

    useEffect(()=>{

        elements.forEach(item =>{
            if (currentIndex === Number(item.dataset.number)){
                item.classList.add('activeItem');
            }else {
                item.classList.remove('activeItem');
            }
        })

    },[goToNext, goToSlider])


    return (
        <div className="slideStyleWrap">
            <div className="leftArrowStyles arrowBg">
                <div className="arrowStyles-right arrowStyles-left" onClick={goToPrevious}></div>
            </div>
            <div className="rightArrowStyles arrowBg">
                <div className="arrowStyles-right" onClick={goToNext}></div>
            </div>

            <img
                className="slideStyle"
                src={slides[currentIndex].url}
            />
            <div className='sliderPhotoBar' >
                {slides.map((slide, slideIndex) => (
                    <div onClick={() => goToSlider(slideIndex)}>
                    <img
                        key = {slideIndex}
                        data-number={slideIndex}
                        className="sliderPhotoBar--item"
                        src={slides[slideIndex].url}
                    />
                    </div>
                    )
                )}
            </div>
        </div>

    );
};

export default Slider;