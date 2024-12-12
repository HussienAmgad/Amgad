import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';

const App = () => {

  return (
    <div>
        <Helmet>
          <title>Amgad Hussien Aboouf</title> {/* العنوان الذي يظهر في التبويب */}
          <meta property="og:site_name" content="Portofolio Amgad Hussien Aboouf" />
          <link rel="icon" type="image/png" href="/profiledp.png" /> {/* استبدل الرابط بالرابط الخاص بالصورة */}
          <meta name="description" content="" />
          <meta name="robots" content="index, follow"/>
          <meta name="keywords" content="مدير مالي,Financial manager" /> 
          <meta name="keywords" content= "أمجد حسين ,أمجد أبوعوف" />
          <meta name="keywords" content="Amgad Hussien Aboouf,Amgad Aboouf" /> {/* الكلمات المفتاحية */}
          <meta name="author" content="Amgad Aboouf" /> {/* اسم الكاتب أو صاحب الموقع */}
          <meta property="og:title" content="Portofolio Amgad Hussien Aboouf" /> {/* عنوان الموقع عند المشاركة على وسائل التواصل الاجتماعي */}
          <meta property="og:description" content="professional in marketing, sales, HR, and accounting." />
          <meta property="og:image" content="/profiledp.png" /> {/* صورة مميزة للموقع عند المشاركة */}
        </Helmet>
      <header className="header">
        <a href="#" className="logo">Portofolio</a>
        <i className="fa-solid fa-bars" id="menu-icon" />
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Skills</a>
          <a href="#portofolio">Portofolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* HOME SECTION DESIGN */}
      <secttion className="home" id="home">
        <div className="home-content">
          <h3>Hi, Myself</h3>
          <h1>Amgad Aboouf</h1>
          <h3>And i'm a <span className="multiple-text" /></h3>
          <p>Experienced professional in marketing, sales, HR, and accounting. Demonstrated success in driving business growth, enhancing operational efficiency, and leading teams across various functions.</p>
          <div className="social-media">
            <a href="#"><i className="fa-brands fa-facebook" /></a>
            <a href="#"><i className="fa-brands fa-twitter" /></a>
            <a href="#"><i className="fa-brands fa-instagram" /></a>
            <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
          </div>
          <a href="/1.pdf" download="/1.pdf" className="btn">Download CV</a>
        </div>
        <div className="home-img">
          <img src="/profiledp.png" alt />
        </div>
      </secttion>
      {/* ABOUT SECTION DESIGN */}
      <section className="about" id="about">
        <div className="about-img">
          <img src="/aboutpic.png" alt />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>MARKETING, HR AND ACCOUNT MANAGER</h3>
          <p>Experienced professional in marketing, sales, HR, and accounting. Demonstrated success in driving business growth, enhancing operational efficiency, and leading teams across various functions. Skills in strategic planning, employee development, financial analysis, and project management. Known for strong leadership, problem-solving abilities, and collaboration to achieve organizational goals. Ready to leverage multifaceted experience to foster innovation and achieve success in marketing, sales, HR, and accounting fields.</p>
          <a href="#" className="btn">Read more</a>
        </div>
      </section>
      {/* WORK EXPERIENCE SECTION DESIGN */}
      <section className="services" id="services">
        <h2 className="heading">My <span>SKILLS</span></h2>
        <div className="services-container">
          <div className="services-box">
            <i className="fa-solid fa-screwdriver-wrench" />
            <h3>Problem solving</h3>
            <p>The ability to effectively and quickly solve problems, using logic and creativity to identify root causes and apply appropriate solutions. This involves deep analysis and making quick decisions to achieve desired goals.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-brain" />
            <h3>Fast Learning</h3>
            <p>The ability to learn quickly and absorb knowledge rapidly, by effectively grasping new concepts and applying them immediately, aiding in adapting swiftly and efficiently to changes and developments.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-desktop" />
            <h3>Office (Word - Excel - Windows)</h3>
            <p>Experience in using Office programs and operating systems includes the ability to effectively use programs like Word and Excel, in addition to efficiently handling operating systems like Windows to achieve maximum productivity and efficiency at work.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-handshake-simple-slash" />
            <h3>Mastering negotiation skills</h3>
            <p>Mastering negotiation skills involves the ability to achieve satisfactory agreements for all parties, by setting goals, preparing well, and using effective negotiation strategies to reach mutually beneficial and fair solutions.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-handshake" />
            <h3>Employee relations management</h3>
            <p>Managing employee relations involves the ability to build and manage positive and productive relationships with the team, by understanding their needs and providing support and solutions to improve performance and enhance satisfaction and loyalty to the organization.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-comment" />
            <h3>Effective communication skills</h3>
            <p>Effective communication skills include the ability to clearly and effectively convey ideas and information, both in writing and verbally, with the ability to understand and engage with others positively.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-handshake-angle" />
            <h3>Supporting teammates</h3>
            <p>Supporting teammates involves providing effective support and assistance to the team, whether through participating in tasks or offering advice and guidance to achieve common goals, fostering collaboration and deepening positive relationships within the team.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-users" />
            <h3>Leadership skills</h3>
            <p>Leadership skills include the ability to motivate and guide teams towards achieving set goals, by providing direction, fostering collaboration, and motivating members in a way that enhances productivity and team spirit.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-language" />
            <h3>Arabic (mother tongue)</h3>
            <p>Arabic as a native language, meaning the ability to express and understand naturally and at an advanced level in the language.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-earth-americas" />
            <h3>English (very good)</h3>
            <p>Very good proficiency in English, meaning the ability to communicate, write, and understand the language fluently and effectively.</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>
      {/* portofolio SECTION DESIGN */}
      <section className="services" id="portofolio">
        <h2 className="heading">Work <span>EXPERIENCE</span></h2>
        <div className="services-container">
          <div className="services-box">
            <i className="fa-solid fa-comment" />
            <h3>Sales and Marketing Supervisor</h3>
            <p>2000 - 2003</p>
            <p>Supported sales team and supervised marketing efforts.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-handshake-angle" />
            <h3>Sales and Marketing Manager</h3>
            <p>2003 - 2008</p>
            <p>Developed sales plans and strategies to achieve team goals and revenue objectives.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-users" />
            <h3>Account and Data Analysis Manager</h3>
            <p>2008 - 2019</p>
            <p>Developed strong client relationships and effective accounting strategies.</p>
            <p>Collected and analyzed data to provide valuable insights for decision-making.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-language" />
            <h3>General Manager</h3>
            <p>Eastern Company</p>
            <p>2019 - 2023</p>
            <p>Increased sports club revenues by 75% in the first year.</p>
            <p>During the pandemic, achieved a 35% revenue increase.</p>
            <p>Guided and supported employees to promote teamwork and resolve complaints.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className="fa-solid fa-earth-americas" />
            <h3>Account Manager</h3>
            <p>Rawaj Consumer Finance</p>
            <p>2023 - Present</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION DESIGN
    <section class="contact" id="contact">
      <h2 class="heading">Contact <span>Me</span></h2>

      <form action="https://formsubmit.co/hussienamgad123@gmail.com" method="POST">
          <div class="input-box">
              <input type="text" name="name" required placeholder="Full Name">
              <input type="email" name="email" required placeholder="Email Address">
          </div>

          <div class="input-box">
              <input type="number" name="phone" required placeholder="Mobile Number">
              <input type="text" name="subject" required placeholder="Email Subject">
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_next" value="http://hussien.000.pe">
          <input type="submit" name="Message" class="btn" placeholder="Send Message">
      </form>
    </section> */}
      <section className="cards-contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <div className="content">
          <div className="card">
            <div className="icon">
              <i className="fas fa-phone" />
            </div>
            <div className="info">
              <h3>Phone</h3>
              <p>+201229921870</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="info">
              <h3>Email</h3>
              <p>amgadaboouf123@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER DESIGN */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright © 2024 by @hussien | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home"><i className="fa-solid fa-angle-up" /></a>
        </div>
      </footer>
    </div>

  );
};

export default App;
