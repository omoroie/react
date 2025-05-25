import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        <p>&copy; 2025 Create by omoroie. 무단 복제 및 사용을 금합니다.</p>
        <div className="footer-links">
          <a className="text-gray-400 hover:text-white" href="#">
            Privacy Policy | Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
