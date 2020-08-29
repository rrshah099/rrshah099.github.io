import React, { Component } from 'react';
import Pdf from './resume.pdf';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Hi! My name is Rakhi Shah, and I am a 20 year old computer science student. I wanted to
              learn more about React, so I took this HTML template and converted it to React. 
              My interests outside of computer science include golf and traveling. 
              Keep scrolling to find out more about what I have accomplished!
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Rakhi Shah</span><br />
                  <span>214-450-2011</span><br />
                  <span>rrshah099@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={Pdf} target = "_blank" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}