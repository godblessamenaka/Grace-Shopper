import React from 'react'

export default function Footer () {
  return (
    <footer className="footer-distributed col-xs-12">
      <div className="footer-left">
        <h3>Alchem<span>Etsy</span></h3>
        <p className="footer-links">
          <a href="#">Home</a>
          ·
          <a href="#">Blog</a>
          ·
          <a href="#">About</a>
          ·
          <a href="#">Faq</a>
          ·
          <a href="#">Contact</a>
        </p>

        <p className="footer-company-name">Alchemetsy &copy; 2017</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>21 Revolution Street</span> New York, New York</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+1 555 123456</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@alchemetsy.com">support@alchemetsy.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div className="footer-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-github"></i></a>
        </div>
      </div>
    </footer>
  )
}
