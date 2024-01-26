import React from 'react'
import "../css/Footer.css"
export default function Footer() {
  return (
    <div>
      <div>
        <footer>
          <div className="bgBlack">
            <div className="footer">
              <div>
                <ul>
                  <li><h4>Products</h4></li>
                  <li><p className="text">Delta</p></li>
                  <li><p className="text">Sigma</p></li>
                  <li><p className="text">Zeta</p></li>
                  <li><p className="text">Alpha</p></li>
                  <li><p className="text">Acumen</p></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><h4>Resources</h4></li>
                  <li><p className="text">Help</p></li>
                  <li><p className="text">Training Videos</p></li>
                  <li><p className="text">Webinars</p></li>
                  <li><p className="text">Request a demo</p></li>
                  <li><p className="text">Create Surveys</p></li>
                  <li><p className="text">Quiz Maker</p></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><h4>Company</h4></li>
                  <li><p className="text">About Us</p></li>
                  <li><p className="text">Careers</p></li>
                  <li><p className="text">Team</p></li>
                  <li><p className="text">Contact Us</p></li>
                </ul>
              </div>
            </div>
            <hr className="hr"></hr>
            <div className="copyright">
              <div className="copyrightsText"><p>Copyright 2022 Circle. All rights reserved.</p></div>
              <div className="terms">
                <p>Privacy Policy</p><hr className="hr"></hr>
                <p>Data & Security</p><hr className="hr"></hr>
                <p>Terms of Service</p><hr className="hr"></hr>
                <p>Data & Security</p>
              </div> 
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
