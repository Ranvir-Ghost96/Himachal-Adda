import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const branchLoc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5502511507657!2d76.18734297544943!3d31.481555874231756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb5aa39796f9%3A0x3d5e714694324768!2sIIIT%20Una%2C%20Academic%20Block!5e0!3m2!1sen!2sin!4v1729795281849!5m2!1sen!2sin";
   return (
    
    <>
      <div className="footer">
        <div className="fbox">
          <div className="aboutus">
            <h2>
              <span id="fdiff">A</span>bout us
            </h2>
            <p>
              Ranvir
              </p>
              <p>
              Sachin
              </p>
              <p>

              Shivang
            </p>
          </div>
          <div className="branch">
            <h2>
              <span id="fdiff">B</span>ranch Location
            </h2>
            <iframe
              src={branchLoc}
              style={{ border: 0 }}
              id="map"
              allowFullScreen=""
              loading="lazy"
              title="Brach Location"
            ></iframe>
          </div>
          <div className="quicklinks">
            <h2>
              <span id="fdiff">Q</span>uick Links
            </h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h2>
              <span id="fdiff">F</span>ollow us
            </h2>
            <ul>
              <li>
                <Link to="/" id="instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="facebook">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy">
          <h2>
            Copyright &copy; <span id="fdiff">H</span>Imachal Adda 2024-24 | All
            Rights Reserved
          </h2>
        </div>
      </div>
    </>
  );
};
