import React from 'react';
import Slider from './Slider';
import Productlist from './ProductList';
import Banner from './Banner';
import HeroSection from './HeroSection';
import Client from './Client';
import Visiter from './Visiter';
import FeaturedCategories from './FeaturedCategories';
import ImageGallery from './ImageGallery';



const Home = () => {
  return (
    <div className=''>
      <div className=" ">
        <Slider />
      </div>
      {/* <ImageGallery/> */}


      <Banner />

      <HeroSection />
      <FeaturedCategories />
      <Productlist />

      <div className='' class="bg-gradient-to-r from-green-600 to-blue-600 font-[sans-serif] p-6">
        <div class="container mx-auto flex flex-col justify-center items-center">
          <h2 class="text-white text-3xl font-bold mb-4">Discover Our New Collection</h2>
          <p class="text-white text-base text-center mb-6">Elevate your style with our latest arrivals. Shop now and enjoy exclusive discounts!</p>
          <a href="javascript:void(0)" class="bg-white text-sm text-blue-600 font-semibold py-2 px-6 rounded hover:bg-slate-100">
            Shop Now
          </a>
        </div>
      </div>
      <Client />
      <Visiter />
    </div>

  )
}

export default Home