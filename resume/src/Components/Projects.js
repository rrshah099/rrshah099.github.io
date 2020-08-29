import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Experiences and Projects.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/maroonpages.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Maroon Pages</h5>
                        <p>Web Devlopment</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/leadershipconference.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Leadership Workshop</h5>
                        <p>Leadership</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/winningwomen.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Winning Women Conference: JP Morgan</h5>
                        <p>Leadership</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/gwc.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Girls Who Code</h5>
                        <p>Service</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/clc.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>CLC Youth Portal</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/gracehopper.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Grace Hopper 2020</h5>
                        <p>Leadership</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/codewritingclub.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Code Writing Club</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt="" src="images/portfolio/panacea.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Panacea</h5>
                        <p>Mobile Application Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/maroonpages.jpg" alt="" />
            <div className="description-box">
              <h4>Maroon Pages</h4>
              <p>I created this site at my first hackathon called Howdy Hack. I worked on the front end design by creating the Razor pages.
                This product was meant to help students fine activities that were occuring on campus. My team and I utilized Google Map APIs to 
                find locations and show them on our site.
              </p>
              <span className="categories"><i className="fa fa-tag" />Web Development, ASP.NET Razor Pages</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/leadershipconference.jpg" alt="" />
            <div className="description-box">
              <h4>Leadership Workshop</h4>
              <p>The Aggie Women in Computer Science organization hosted this event to be able to hear from female software engineers. 
                I got to hear about their experiences and how they were able to get the position they had. As an officer, I assisted in organizing this event
                as well as leading some of the discussions about being a women in tech.
              </p>
              <span className="categories"><i className="fa fa-tag" />Leadership, Networking</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/winningwomen.jpg" alt="" />
            <div className="description-box">
              <h4>Winning Women Conference</h4>
              <p>I applied to this conference to network with a few of JP Morgan's female software engineers and also learn more 
                about what the company did to support women in the workplace. This event was very informative and my team even won a mini hackathon
                during the conference!
              </p>
              <span className="categories"><i className="fa fa-tag" />Leadership, Networking</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/girlswhocode.jpg" alt="" />
            <div className="description-box">
              <h4>Girls Who Code</h4>
              <p>I helped start the Girls Who Code chapter in the College Station/Bryan area. We had two events in February/March, and then had to stop
                because of COVID :(. I am hoping to start it up again next year when it is safe for everyone. </p>
              <span className="categories"><i className="fa fa-tag" />Service, Networking</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/clc.jpg" alt="" />
            <div className="description-box">
              <h4>CLC Youth Portal</h4>
              <p>As a part of my internship, were asked to help a nonprofit come up with a solution to a challenge the nonprofit was facing.
                My intern team was assigned a nonprofit called CLC who were struggling to attract youth partipants. We developed a 
                solution that streamlined the application process and provided automatic results to help their retention.
              </p>
              <span className="categories"><i className="fa fa-tag" />Web Develpment, Flask, SQLite</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/gracehopper.jpg" alt="" />
            <div className="description-box">
              <h4>Grace Hopper Conference 2020</h4>
              <p>I am attending Grace Hopper in October and am counting down days already!</p>
              <span className="categories"><i className="fa fa-tag" />Networking, Leadership</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/codewritingclub.jpg" alt="" />
            <div className="description-box">
              <h4>Code Writing Club</h4>
              <p>I started this subgroup of Aggie Women in Computer Science to allow people with no web development experience 
                to create a fully functioning website by the end of the semester. I wanted to lead a project while also being able to help
                other people expand their skills.
              </p>
              <span className="categories"><i className="fa fa-tag" />Web Development, React, Python Flask, SQL</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/panacea.jpg" alt="" />
            <div className="description-box">
              <h4>Panacea</h4>
              <p>Panacea is a mobile app that I want to build to help connect groups of people who want to achieve a common goal. 
                I will being working on this later in the year.
              </p>
              <span className="categories"><i className="fa fa-tag" />Mobile App Development, Google Firebase</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
        </div> {/* row End */}
      </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}