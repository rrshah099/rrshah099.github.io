import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
       <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Texas A&M University</h3>
                <p className="info">B.S. Degree in Computer Science, Minor in Mathematics <span>•</span>Engineering Honors</p>
                <p className="info"><em className="date">GPA: 3.874</em> <span>•</span>  <em className="date">Spring 2022</em></p>
                <h5> Coursework:</h5>
                <p>
                
                 
                <ul className="skills">
                    <li>Data Structures and Algorithms <span>•</span> <em className="date">Fall 2019</em></li>
                    <li>Discrete Structures for Computing <span>•</span> <em className="date">Fall 2019</em></li>
                    <li>Linear Algebra <span>•</span> <em className="date">Fall 2019</em></li>
                    <li>Computer Organization <span>•</span> <em className="date">Spring 2020</em></li>
                    <li>Programming Languages <span>•</span> <em className="date">Spring 2020</em></li>
                    <li>Mathematical Probability <span>•</span> <em className="date">Spring 2020</em></li>
                    <li>Honors Data Science <span>•</span> <em className="date">Fall 2020</em></li>
                    <li>Programming Studio <span>•</span> <em className="date">Fall 2020</em></li>
                    <li>Honors Computer Systems <span>•</span> <em className="date">Fall 2020</em></li>
                    <li>Design and Analysis of Algorithms <span>•</span> <em className="date">Fall 2020</em></li>
                
                </ul>
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>JP Morgan</h3>
                <p className="info">Corporate & Investment Banking: Software Engineering Intern<span>•</span><em className="date">June 2020 - August 2020</em></p>
                <p>
                <ul>
                  
                    <li>Used React and Flask to create a live graph that tracks the ratios of two stocks, the upper and lower bounds of a stock, and to send an alert if a bound is crossed</li>
                    <li>Created applications through Java SpringBoot that took Kafka messages and produced a response </li> 

                </ul>
                 
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Aggie Women in Computer Science</h3>
                <p className="info">President <span>•</span> <em className="date">August 2018 - Present</em></p>
                <p>
                <ul>
                    <li>Provided over thirty scholarships for students to attend the Grace Hopper Conference in 2020</li>
                    <li> Hosted a Leadership Conference to encourage leadership roles for women in the technology industry</li> 
                    <li>Conducted technical workshops over topics such as Github and Web APIs</li>
                    <li>Started a Girls Who Code chapter in the College Station area for elementary and middle school girls</li> 


                </ul>
                 
                 
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>iD Tech Camps</h3>
                <p className="info">C++ Instructor <span>•</span> <em className="date">June 2019 - August 2019</em></p>
                <p>
                <ul>
                    <li>Taught teenagers C++ fundamentals in order to create an application with them in a week.</li>
                    <li>Created multiple arcade style games through game loops and animations in SFML in order to inspire
                    and demonstrate basic game development to teenagers.</li>       
                </ul>
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Fairness in Recommender Systems</h3>
                <p className="info">Honors Undergraduate Researcher <span>•</span> <em className="date">August 2020 - December 2021</em></p>
                <p>
                <ul>
                    <li>Started this semester and will write a thesis over the topic after three semesters</li> 
                    <li>Side Note: I am so interested in this topic and can't wait to learn more about it!</li>       
                </ul>
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand css" /><em>Java </em></li>
                <li><span className="bar-expand css" /><em>C++ </em></li>
                <li><span className="bar-expand html5" /><em>Python</em></li>
                <li><span className="bar-expand photoshop" /><em>HTML/CSS</em></li>
                <li><span className="bar-expand photoshop" /><em>Java Springboot</em></li>
                <li><span className="bar-expand illustrator" /><em>React</em></li>
                <li><span className="bar-expand illustrator" /><em>Python Flask</em></li>
                <li><span className="bar-expand wordpress" /><em>SQL</em></li>
                <li><span className="bar-expand jquery" /><em>R</em></li>
                <li><span className="bar-expand jquery" /><em>Kafka</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> 
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}