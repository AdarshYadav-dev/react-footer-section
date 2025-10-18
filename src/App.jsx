import "./App.scss";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import social1 from "./assets/Social icon.png";
import social2 from "./assets/Social icon (1).png";
import social3 from "./assets/Social icon (2).png";
import social4 from "./assets/Group (2).png";

function App() {
  return (
    <div className="main-container">
      {/* Top Section */}
      <div className="container-top center">
        <div className="container-top-content">
          <p className="container-top-title">Get Notified About Project</p>
          <p className="container-top-para">Subscribe Now</p>
          <input type="text" placeholder="Email" />
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-container">
        <div className="p">
          {/* Footer Content */}
          <div className="footer-content">
            <p className="footer-title">
              Let’s join Magebyte, your best partner
            </p>

            <div className="footer-rights">
              <div className="footer-right">
                <img src={logo1} alt="logo1" className="footer-icon" />
                <p className="footer-details">info@magebyte.com</p>
              </div>

              <div className="footer-right">
                <img src={logo2} alt="logo2" className="footer-icon" />
                <p className="footer-details">+91 8527259168</p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footerheading">
            <div className="footerimg">
              <img src={logo3} alt="logo3" />
            </div>

            <div className="footer-parts">
              <p className="footer-part">Overview</p>
              <p className="footer-part">Features</p>
              <p className="footer-part">Pricing</p>
              <p className="footer-part">Careers</p>
              <p className="footer-part">Help</p>
            </div>

            <div className="footer-icon">
              <img src={social1} alt="social-icon" />
              <img src={social2} alt="social-icon" />
              <img src={social3} alt="social-icon" />
              <img src={social4} alt="social-icon" />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom-part">
            <div className="bottom-titles">
              <p className="title">
                © Copyright 2025, All Rights Reserved by Magebyte
              </p>
            </div>

            <div className="bottom-left">
              <p className="bottom-left-content">Terms & Conditions</p>
              <p className="bottom-left-content">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
