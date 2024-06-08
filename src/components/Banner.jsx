import React from 'react'

const Banner = () => {
  return (
    <div className='mt-12 mb-12'>
      <div class="flex max-sm:flex-col items-center justify-center bg-green-700 text-white  px-6 py-3.5 rounded font-[sans-serif]">
            <p class="text-base">Limited Time Offer: Get 20% Off!</p>
            <div class="max-sm:mt-4 sm:ml-6 flex gap-4">
                <button type="button" class="bg-white text-blue-500 font-semibold py-2 px-4 rounded text-sm hover:bg-slate-100">
                    Dismiss
                </button>
                <button type="button" class="bg-white text-blue-500 font-semibold py-2 px-4 rounded text-sm hover:bg-slate-100">
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner
