import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer green lighten-1'>
      <div className='footer-copyright'>
        <div className='container'>© {new Date().getFullYear()} mdbm</div>
      </div>
    </footer>
  );
};

export default Footer;
