import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-4">
  <section className="text-center my-8" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620200423727-8127f75d7f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFncmljdWx0dXJlfGVufDB8fDB8fHww)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '5px', height: '240px', width: '100%' }}>
    <div className=" items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
      <p className="text-green-600 font-semibold text-2xl max-w-2xl mx-auto">
      Empowering Agriculture, Enriching Lives: Bhartiya Bio-Tech, Your Partner in Progress.
      </p>
    </div>
  </section>

      <section className="my-8">
        <h2 className="text-3xl text-center font-bold text-green-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 font-semibold text-lg border-gray-300 mb-8 px-12 text-center">
        At Bhartiya Bio-Tech, our mission is to revolutionize agriculture through innovation and sustainability. We are committed to empowering farmers with cutting-edge biotechnological products and solutions that enhance crop yield, protect against pests, and promote eco-friendly practices. Our e-commerce platform bridges the gap between advanced agricultural products and the farmers who need them, ensuring accessibility and affordability. By fostering a community of knowledgeable and resourceful agriculturalists, we aim to contribute to global food security and environmental stewardship, driving progress and prosperity in the agricultural sector.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 bg-slate-100">
  <div className="rounded-lg flex items-center justify-center">
    <img 
      src="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFncmljdWx0dXJlfGVufDB8fDB8fHww" 
      alt="Agricultural field with green crops" 
      className="w-full h-auto md:h-full object-cover rounded-lg" 
      style={{ borderRadius: '10px' }}
    />
  </div>
  <div className="rounded-lg flex items-center justify-center">
    <img 
      src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Close-up of a farmer's hands holding soil" 
      className="w-full h-auto md:h-full object-cover rounded-lg" 
      style={{ borderRadius: '10px' }}
    />
  </div>
  <div className="rounded-lg flex items-center justify-center">
    <img 
      src="https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbnRpbmd8ZW58MHx8MHx8fDA%3D" 
      alt="Close-up of a farmer's hands holding soil" 
      className="w-full h-auto md:h-full object-cover rounded-lg" 
      style={{ borderRadius: '10px' }}
    />
  </div>
  <div className="rounded-lg flex items-center justify-center">
    <img 
      src="https://plus.unsplash.com/premium_photo-1661832711622-e70ea4ec8301?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRyYWN0b3IlMjBwbG93aW5nJTIwYSUyMGZpZWxkJTIwdW5kZXIlMjBhJTIwYmx1ZSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D" 
      alt="Tractor plowing a field under a blue sky" 
      className="w-full h-auto md:h-full object-cover rounded-lg" 
      style={{ borderRadius: '10px' }}
    />
  </div>
</div>


      </section>

      <section className="text-center my-8">
  <h2 className="text-3xl font-bold text-green-600 mb-4">Meet Our Leaders</h2>
  <p className="text-gray-700 max-w-2xl font-semibold mx-auto mb-8">
    Get to know the driving force behind Bhartiya Biotech's success. Meet our visionary leaders who are shaping the future of agriculture with their expertise, dedication, and innovative spirit.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 rounded-full h-32 w-32 mb-4 flex items-center justify-center">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcToeQg-PHV3vsi84RWd5OWH64lOHfnl5r9YnHtCyJqZKH81Y0n4" alt="Rajesh Gupta" className="h-full w-full object-cover rounded-full" />
      </div>
      <h3 className="text-xl font-bold">Rajesh Gupta</h3>
      <p className="text-gray-500">Chairman</p>
      <div className="flex space-x-2 mt-2">
  <span>
    <a href="#" className="hover:underline">
      <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 18 18">
        <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
        <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"></path>
      </svg>
      <span className="sr-only">Instagram</span>
    </a>
  </span>
  <span>
    <a href="#" className="hover:underline">
      <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 18 18">
        <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z"></path>
      </svg>
      <span className="sr-only">Facebook</span>
    </a>
  </span>
</div>

    </div>
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 rounded-full h-32 w-32 mb-4 flex items-center justify-center">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcToeQg-PHV3vsi84RWd5OWH64lOHfnl5r9YnHtCyJqZKH81Y0n4" alt="Priya Patel" className="h-full w-full object-cover rounded-full" />
      </div>
      <h3 className="text-xl font-bold">Priya Patel</h3>
      <p className="text-gray-500">Chief Operating Officer</p>
      <div className="flex space-x-2 mt-2">
  <span>
    <a href="#" className="hover:underline">
      <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 18 18">
        <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
        <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"></path>
      </svg>
      <span className="sr-only">Instagram</span>
    </a>
  </span>
  <span>
    <a href="#" className="hover:underline">
      <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 18 18">
        <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z"></path>
      </svg>
      <span className="sr-only">Facebook</span>
    </a>
  </span>
</div>

    </div>
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 rounded-full h-32 w-32 mb-4 flex items-center justify-center">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcToeQg-PHV3vsi84RWd5OWH64lOHfnl5r9YnHtCyJqZKH81Y0n4" alt="Amit Singh" className="h-full w-full object-cover rounded-full" />
      </div>
      <h3 className="text-xl font-bold">Amit Singh</h3>
      <p className="text-gray-500">Chief Financial Officer</p>
      <div className="flex space-x-2 mt-2">
  <span>
    <a href="#" className="hover:underline">
      <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 18 18">
        <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
        <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"></path>
      </svg>
      <span className="sr-only">Instagram</span>
    </a>
  </span>
  <span>
    <a href="#" className="hover:underline">
      <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 18 18">
        <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z"></path>
      </svg>
      <span className="sr-only">Facebook</span>
    </a>
  </span>
</div>

    </div>
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 rounded-full h-32 w-32 mb-4 flex items-center justify-center">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcToeQg-PHV3vsi84RWd5OWH64lOHfnl5r9YnHtCyJqZKH81Y0n4" alt="Deepa Sharma" className="h-full w-full object-cover rounded-full" />
      </div>
      <h3 className="text-xl font-bold">Deepa Sharma</h3>
      <p className="text-gray-500">Chief Technology Officer</p>
      <div className="flex space-x-2 mt-2">
  <span>
    <a href="#" className="hover:underline">
      <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 18 18">
        <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
        <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"></path>
      </svg>
      <span className="sr-only">Instagram</span>
    </a>
  </span>
  <span>
    <a href="#" className="hover:underline">
      <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 18 18">
        <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z"></path>
      </svg>
      <span className="sr-only">Facebook</span>
    </a>
  </span>
</div>

    </div>
  </div>
  <button className="mt-8 px-4 py-2 bg-black text-white hover:border hover:text-black hover:bg-slate-300  rounded">View the team</button>
</section>
    </div>
  );
};

export default AboutUs;
