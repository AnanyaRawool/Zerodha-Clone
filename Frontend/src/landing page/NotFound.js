import React from 'react';
function NotFound() {
    return (
      <div className='container p-5'>
      <div className='row text-center'>  {/* in single row we have 12 clm default  ot put any content so we choose row  */}
              <h1 className='mt-5' >404 Not Found</h1>
              <p>Sorry, the page you are looking for does not exist.</p>
      </div>
     </div>
      );
}

export default NotFound;