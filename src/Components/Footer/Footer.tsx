const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3F6F5] pt-20 pb-10 text-[#07484A]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-10">
        <div className="flex flex-col items-start w-full md:w-1/3 mb-8 md:mb-0">
          <img src="/images/logo.png" alt="Logo" className="w-32  mb-4" />
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <img src="/images/footer/fb.svg" alt="fb" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <img src="/images/footer/insta.svg" alt="insta" />
            </a>
            <a href="https://www.linkedin.com" aria-label="Instagram">
              <img src="/images/footer/linkedin.svg" alt="linkedin" />
            </a>
            <a href="https://www.dribble.com" aria-label="Instagram">
              <img src="/images/footer/dribble.svg" alt="dribble" />
            </a>
            <a href="https://www.twitter.com" aria-label="Instagram">
              <img src="/images/footer/twitter.svg" alt="twiiter" />
            </a>
          </div>
          <h3 className=" font-semibold mb-2">Address</h3>
          <p>+123 654 987</p>
          <p>
            877 The Bronx, NY <br />
            14568, USA
          </p>
        </div>

        {/* Second Section (Links) */}
        <div className="w-full md:w-4/5 grid grid-cols-2 md:mt-12 md:grid-col-2 lg:grid-cols-4 gap-8">
          {/* My Account */}
          <div>
            <h4 className="text-lg font-semibold mb-5">My Account</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Sign In</a>
              </li>
              <li className="mb-2">
                <a href="#">Register</a>
              </li>
              <li className="mb-2">
                <a href="#">Order Status</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-5">Help</h4>
            <ul>
              <li className="text-gray-600 hover:text-gray-800 mb-2">
                <a href="#">Shipping</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 mb-2">
                <a href="#">Returns</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 mb-2">
                <a href="#">Sizing</a>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800  mb-5">Shop</h4>
            <ul>
              <li className="text-gray-600 hover:text-gray-800 mb-2">
                <a href="#">All Products</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 mb-2">
                <a href="#">Bedroom</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 mb-2">
                <a href="#">Dining Room</a>
              </li>
            </ul>
          </div>

          {/* Legal Stuff */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800  mb-5">
              Legal Stuff
            </h4>
            <ul>
              <li className="text-gray-600 hover:text-gray-800 mb-2">
                <a href="#">Shipping & Delivery</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 mb-2">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 mb-2">
                <a href="#">Privacy & Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-10 pt-14">
        <p>&copy; 2020 INWOOD. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
