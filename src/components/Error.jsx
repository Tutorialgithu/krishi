// import React from 'react';

// const Error = () => {
//   return (
//     <div className="row content-row">
//       <div id="primary" className="content-area col-span-12">
//         <main id="main" className="site-main">
//           <section className="error-404">
//             <div className="error-404-content">
//               <div className="error-404-image">
//                 <img src="https://demo.casethemes.net/itfirm/wp-content/themes/itsoft/assets/images/image-404.jpg" alt="404 Error" />
//               </div>
//               <a href="../index.html" className="btn btn-animate btn-primary newstyle-btn">
//                 Go back home!
//               </a>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Error;


import React from 'react';

const Error = () => {
  return (
    <div className="flex justify-center mt-6 items-center h-screen">
      <div className="max-w-lg p-8 bg-white border rounded-lg shadow-lg">
        <div className="text-center">
          <img src="https://demo.casethemes.net/itfirm/wp-content/themes/itsoft/assets/images/image-404.jpg" alt="404 Error" className="mx-auto" />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Oops! Page not found</h1>
          <p className="text-gray-600 mt-2">The page you are looking for might have been removed or does not exist.</p>
        </div>
        <div className="flex justify-center mt-6">
          <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Go back home</a>
        </div>
      </div>
    </div>
  );
};

export default Error;
