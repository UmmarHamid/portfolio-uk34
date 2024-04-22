import { USEREXPERTISE, USERNAME } from '@/constants';
import type { NextPage } from 'next';

const About: NextPage = () => {
  var workStartDate = new Date('2019-08-01');
  var currentDate = new Date();
  const difference = currentDate.getTime() - workStartDate.getTime();

  // Convert milliseconds to years
  var millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // accounting for leap years
  var workYears = Math.floor(difference / millisecondsInYear);
  return (
    <section className='about section' id='red'>
      <div className='container'>
        <div className='row'>
          <div className='section-title padd-15'>
            <h2>About Me</h2>
          </div>
        </div>
        <div className='row'>
          <div className='about-content padd-15'>
            <div className='row'>
              <div className='about-text padd-15'>
                <h2>
                  {`I am ${USERNAME} `}
                  <span>{USEREXPERTISE}</span>
                </h2>
                <p>
                  {`As a software engineer, I have been building solutions that
                  have impacted millions of users and I primarily focus on
                  Frontend technologies at work. I have ${workYears}+ years of experience
                  in building professional websites and front-end applications.
                  During my career, I got to work with amazing people and brands
                  like LifeRamp, MAZWorld, East West Centre, Wildstyle, Truevet
                  Animal Nutrition,Redaptive and many more. I feel obligated to build
                  front-end interfaces of supreme quality. I love the javascript
                  ecosystem and I have designed & developed multiple products in
                  my career. I have worked with E-commerce, EdTech & NonProfits.
                  I have hands-on experience in Javascript, React, React Native,
                  HTML5/CSS, Drupal Frontend, Twig, and much more. I can be a
                  super valuable member of your team. Let's connect, Ummar`}
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='personal-info padd-15'>
                <div className='row'>
                  <div className='info-item padd-15'>
                    <p>
                      Website : <span>www.mysiteurl.vercel.app</span>
                    </p>
                  </div>
                  <div className='info-item padd-15'>
                    <p>
                      Email : <span>kaxama34@email.com</span>
                    </p>
                  </div>
                  <div className='info-item padd-15'>
                    <p>
                      Degree : <span>Btech CSE</span>
                    </p>
                  </div>
                  <div className='info-item padd-15'>
                    <p>
                      Phone : <span>+91 7006138763</span>
                    </p>
                  </div>
                  <div className='info-item padd-15'>
                    <p>
                      City : <span>Srinagar</span>
                    </p>
                  </div>
                  <div className='info-item padd-15'>
                    <p>
                      Freelance : <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='buttons padd-15'>
                    <a
                      href='https://drive.google.com/file/d/10smHA57KTzXimDlFDTDJyhtUxhvxKd0G/view?usp=drive_link'
                      target='_target'
                      className='btn'
                    >
                      Download CV
                    </a>
                    <a
                      href='#contact-section-anchor'
                      data-section-index={0}
                      className='btn hire-me'
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
              <div className='skills padd-15'>
                <div className='row'>
                  <div className='skill-item padd-15'>
                    <h5>HTML</h5>
                    <div className='progress'>
                      <div className='progress-in' style={{ width: '100%' }} />
                      <div className='skill-percent'>100%</div>
                    </div>
                  </div>
                  <div className='skill-item padd-15'>
                    <h5>CSS</h5>
                    <div className='progress'>
                      <div className='progress-in' style={{ width: '100%' }} />
                      <div className='skill-percent'>100%</div>
                    </div>
                  </div>
                  <div className='skill-item padd-15'>
                    <h5>Javascript</h5>
                    <div className='progress'>
                      <div className='progress-in' style={{ width: '100%' }} />
                      <div className='skill-percent'>100%</div>
                    </div>
                  </div>
                  <div className='skill-item padd-15'>
                    <h5>React</h5>
                    <div className='progress'>
                      <div className='progress-in' style={{ width: '100%' }} />
                      <div className='skill-percent'>100%</div>
                    </div>
                  </div>
                  <div className='skill-item padd-15'>
                    <h5>Tailwind</h5>
                    <div className='progress'>
                      <div className='progress-in' style={{ width: '100%' }} />
                      <div className='skill-percent'>100%</div>
                    </div>
                  </div>
                  <div className='skill-item padd-15'>
                    <h5>Next.js</h5>
                    <div className='progress'>
                      <div className='progress-in' style={{ width: '90%' }} />
                      <div className='skill-percent'>90%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='education padd-15'>
                <h3 className='title'>Education</h3>
                <div className='row'>
                  <div className='timeline-box padd-15'>
                    <div className='timeline shadow-dark'>
                      {/* Timeline Item */}
                      <div className='timeline-item'>
                        <div className='circle-dot' />
                        <h6 className='timeline-date'>
                          <i className='fa fa-calendar' /> 2020 to Present
                        </h6>
                        <h4 className='timeline-title'>
                          Self Taught (Programming)
                        </h4>
                        <p className='timeline-text'>
                          Since 2020 I started to learn Programming. I have
                          learn Html, Css, Sass, JavaScript, Bootstrap. Now I am
                          a Professional Web Designer..
                        </p>
                      </div>
                      {/* Timeline Item end */}
                      {/* Timeline Item */}
                      <div className='timeline-item'>
                        <div className='circle-dot' />
                        <h6 className='timeline-date'>
                          <i className='fa fa-calendar' /> 2019 to Present
                        </h6>
                        <h4 className='timeline-title'>
                          Diploma in Civil Engineering
                        </h4>
                        <p className='timeline-text'>
                          From 2019 I started my journey to be a Civil Engineer
                          on Shyamoli Ideal Polytechnic Institute. It still
                          Running to Present.
                        </p>
                      </div>
                      {/* Timeline Item end */}
                      {/* Timeline Item */}
                      <div className='timeline-item'>
                        <div className='circle-dot' />
                        <h6 className='timeline-date'>
                          <i className='fa fa-calendar' /> 2014 to 2019
                        </h6>
                        <h4 className='timeline-title'>
                          Secondary School Certificate
                        </h4>
                        <p className='timeline-text'>
                          In 2019 I passed SSC Exam from Science Group with GPA-
                          4.56. My school name was Patgram Anath Bondhu Govt.
                          High School.
                        </p>
                        {/* TODO: Add details for main edu, certificates etc all meaning ALL */}
                      </div>
                      {/* Timeline Item end */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='experience padd-15'>
                <h3 className='title'>Experience</h3>
                <div className='row'>
                  <div className='timeline-box padd-15'>
                    <div className='timeline shadow-dark'>
                      {/* Timeline Item */}
                      <div className='timeline-item'>
                        <div className='circle-dot' />
                        <h6 className='timeline-date'>
                          <i className='fa fa-calendar' /> 2019 to Present
                        </h6>
                        <h4 className='timeline-title'>Graphics Design</h4>
                        <p className='timeline-text'>
                          From 2018 I am woking on Graphics Design. The software
                          I use Photoshop, Illustrator for Graphics design.
                        </p>
                      </div>
                      {/* Timeline Item end */}
                      {/* Timeline Item */}
                      <div className='timeline-item'>
                        <div className='circle-dot' />
                        <h6 className='timeline-date'>
                          <i className='fa fa-calendar' /> 2020 to Present
                        </h6>
                        <h4 className='timeline-title'>Web Design</h4>
                        <p className='timeline-text'>
                          Since 2020 I started to learn Coding. I have learn
                          Html, Css, Sass, JavaScript, Bootstrap. Now I am a
                          Professional Web Designer..
                        </p>
                      </div>
                      {/* Timeline Item end */}
                      {/* Timeline Item */}
                      <div className='timeline-item'>
                        <div className='circle-dot' />
                        <h6 className='timeline-date'>
                          <i className='fa fa-calendar' /> 2020 to Present
                        </h6>
                        <h4 className='timeline-title'>Wordpress</h4>
                        <p className='timeline-text'>
                          Since 2020 I started to learn Wordpress. I can
                          install, Customize, &amp; fix bug on wordpress.{' '}
                        </p>
                      </div>
                      {/* Timeline Item end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
