import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedCategories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="popular-categories py-8">
            <div className="container mx-auto">
                <div className="section-title flex justify-center items-center mb-6">
                    <div className="title ">
                        <h3 className="text-xl font-bold text-center">Featured Categories</h3>
                    </div>
                    <div className="slider-arrow flex space-x-2">
                        <button className="slider-btn slider-prev text-gray-700 hover:text-gray-900"><i className="fi-rs-arrow-small-left"></i></button>
                        <button className="slider-btn slider-next text-gray-700 hover:text-gray-900"><i className="fi-rs-arrow-small-right"></i></button>
                    </div>
                </div>
                <div className="relative">
                    <Slider {...settings}>
                        {categories.map((category, index) => (
                            <div key={index} className="p-4 bg-red-100 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg text-center">
                                <figure className="overflow-hidden flex  items-center justify-center mb-4">
                                    <a href="#">
                                        <img src={category.imgSrc} alt={category.name} className="w-[200px] h-auto transition-transform duration-300 transform hover:scale-105 rounded-lg" />
                                    </a>
                                </figure>
                                <h6 className="text-lg font-semibold mb-2">
                                    <a href="#" className="text-gray-800 hover:text-gray-900">{category.name}</a>
                                </h6>
                                <span className="text-sm text-gray-500">{category.items}</span>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

const categories = [
    { name: 'Fertilizers', items: '89 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Pesticides', items: '87 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Herbicides', items: '26 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Fungicides', items: '28 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Insecticides', items: '14 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Rodenticides', items: '54 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Biopesticides', items: '56 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Antibiotics', items: '72 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Antifungals', items: '36 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Antivirals', items: '123 items', imgSrc: '../src/components/images/yutori_1.jpg' },
    { name: 'Antiprotozoals', items: '34 items', imgSrc: '../src/components/images/yutori_1.jpg' },
];

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slider-btn slider-next absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-700 hover:text-gray-900" onClick={onClick}>
            <i className="fi-rs-arrow-small-right"></i>
        </button>
    );
}

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slider-btn slider-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-700 hover:text-gray-900" onClick={onClick}>
            <i className="fi-rs-arrow-small-left"></i>
        </button>
    );
}

export default FeaturedCategories;
