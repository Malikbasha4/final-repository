import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className={currentPage === 'signup' ? 'signup' : 'login'}>
        {currentPage === 'signup' ? (
          <form>
            <label htmlFor="chk" aria-hidden="true" onClick={() => handlePageChange('login')}>
              Sign up
            </label>
            {/* Add your signup form fields here */}
          </form>
        ) : (
          <form>
            <label htmlFor="chk" aria-hidden="true" onClick={() => handlePageChange('signup')}>
              Login
            </label>
            {/* Add your login form fields here */}
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
