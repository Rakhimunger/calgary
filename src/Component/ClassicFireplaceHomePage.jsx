// import React from "react";

// // Only external, CDN or public links allowed. All images should be referenced using same-assets.com URLs or royalty-free placeholders (as discussed).

// const ClassicFireplaceHomePage = () => (
//   <div className="cf-main">
//     {/* --- Embedded Styles --- */}
//     <style>{`
//       @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');
//       html, body, .cf-main {
//         box-sizing: border-box;
//         margin: 0; padding: 0;
//         font-family: 'Jost', 'Roboto', Arial, sans-serif;
//         background: #fbfbfb;
//         color: #333535;
//       }
//       .cf-navbar {
//         width: 100%; background: rgba(255,255,255,0.97); height: 72px; display: flex; align-items: center; justify-content: center;
//         box-shadow: 0 1px 8px rgba(50,50,50,0.04);
//         position: sticky; top: 0; z-index: 1000;
//       }
//       .cf-navbar-content {
//         width: 90%; max-width: 1300px; display: flex; align-items: center; justify-content: space-between;
//       }
//       .cf-logo {
//         height: 46px;
//       }
//       .cf-nav-links { display: flex; align-items: center; gap: 36px; }
//       .cf-nav-link {
//         color: #333535;
//         font-size: 1.08rem;
//         padding: 6px 14px;
//         border-radius: 4px; text-decoration: none;
//         font-weight: 500;
//         transition: background 0.2s;
//         position:relative;
//       }
//       .cf-nav-link.active {
//         background: #155e63;
//         color: #fff;
//       }
//       .cf-nav-link:hover { background: #f6f6f6; }
//       .cf-cart-icon {
//         width: 24px; margin-left: 14px; opacity: 0.7;
//       }
//       /* --- Hero section --- */
//       .cf-hero {
//         width: 100%; min-height: 430px;
//         background: url('https://ext.same-assets.com/2586384222/3362558172.jpeg') center center/cover no-repeat;
//         display: flex; flex-direction: column; justify-content: center;
//         position: relative; color: #fff;
//       }
//       .cf-hero-overlay {
//         background: rgba(40,54,53,.53); width: 100%; min-height: 430px; display: flex; align-items: center; justify-content: flex-end;
//       }
//       .cf-hero-content {
//         padding: 3vw 6vw; max-width: 650px; text-align: left; z-index: 2;
//       }
//       .cf-hero-title {
//         font-size: 3rem; font-weight: 700; margin: 0 0 16px 0;
//         line-height: 1.15;
//       }
//       .cf-hero-desc {
//         font-size: 1.29rem; font-weight: 400;
//         margin-bottom: 32px;
//       }
//       .cf-hero-follow { position: absolute; right: 48px; bottom: 32px; font-size: 0.93rem; }
//       .cf-hero-socials img { width: 23px; margin-right: 12px; opacity: 0.8; }
//       /* --- Expertise Section --- */
//       .cf-expertise {
//         background: #fff; padding: 76px 5vw 32px 5vw; margin-top: -6px;
//       }
//       .cf-section-title {
//         font-size: 2.8rem; font-weight: 700; margin: 0 0 0.1em 0; color: #155e63;
//       }
//       .cf-section-desc {
//         font-size: 1.29rem; color: #6dbdd5; margin: 0 0 36px 0;
//       }
//       .cf-services-row { display: flex; align-items: flex-start; flex-wrap: wrap; gap: 24px; justify-content: space-between; }
//       .cf-services-list {
//         flex: 1 1 220px; min-width: 210px; font-size: 1.01rem; line-height: 1.65; color: #333535; margin-bottom: 32px;
//       }
//       .cf-services-list ul { list-style: none; margin: 0; padding: 0; }
//       .cf-services-list li:before { content: '+'; color: #155e63; font-weight: bold; display: inline-block; margin-right: 8px; }
//       .cf-view-all {
//         margin-left: auto; color: #155e63; text-decoration: none; font-weight: 500; font-size: 1.11rem;
//         display: flex; align-items: center; gap: 5px;
//         border-bottom: 1px solid #6dbdd5; padding-bottom:2px; width:max-content
//       }
//       /* --- Stats --- */
//       .cf-stats-row {
//         display: flex; justify-content: center; align-items: flex-end; gap: 50px; margin: 38px 0 0 0;
//         border-bottom: 1.5px solid #E3E6EA; padding-bottom: 28px;
//       }
//       .cf-stat { text-align: center; }
//       .cf-stat-main { font-size: 2.95rem; font-weight:700; letter-spacing:1px; }
//       .cf-stat-label { color: #686868; font-size: 1.03rem; margin-top: 7px; }
//       /* --- Category Banner --- */
//       .cf-category-banner {
//         background: #949595; color: #fff; font-size:2.49rem; letter-spacing:1.3px; display: flex; justify-content: center; align-items: center; flex-wrap:wrap; min-height:94px;font-weight:700;text-align:center;
//       }
//       .cf-category-banner span { margin: 0 36px; opacity: 0.3; letter-spacing: 7px; }
//       /* --- About Section --- */
//       .cf-about { padding: 72px 6vw 10px 6vw; background: #fff; }
//       .cf-about-row { display: flex; flex-wrap: wrap; gap: 60px; }
//       .cf-about-img { width: 325px; border-radius:16px; }
//       .cf-about-content { flex:1; min-width:260px; }
//       .cf-about-head { display:flex; align-items:center;justify-content:space-between;margin-bottom:24px; }
//       .cf-about-tabs { display: flex; gap: 36px; margin-top:16px; }
//       .cf-about-tab {
//         font-weight: 500; font-size: 1.05rem; color: #333;font-family: inherit; padding-bottom: 3px;
//         border-bottom:2px solid transparent; margin-right: 16px; cursor: pointer;
//       }
//       .cf-about-tab.active { color: #155e63; border-bottom:2px solid #155e63; }
//       .cf-about-desc { margin-top: 18px; line-height:1.62; color:#444;font-size:1.1rem; }
//       /* --- Steps Section --- */
//       .cf-steps {
//         display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start;
//         background: #fff; margin: 18px 0 58px 0; padding: 12px 0 32px 0;
//       }
//       .cf-step {
//         flex: 1 1 185px; max-width: 24%; min-width: 170px; background: #fff; margin: 0 10px; text-align: center;
//         position: relative; padding: 12px 8px 0 8px;
//       }
//       .cf-step-number {
//         width:32px;height:32px;display:inline-block;font-weight:700;background:#6dbdd5;color:#fff;border-radius:50%;line-height:32px;font-size:1.14rem;margin-bottom:10px;
//       }
//       .cf-step-title { font-weight:700; font-size:1.06rem;margin-bottom:5px;}
//       .cf-step-desc { color:#444;font-size:0.97rem;line-height:1.46; margin-bottom: 20px;}
//       /* --- Gallery --- */
//       .cf-gallery { margin: 0 auto 60px auto; padding:10px 0;width:90%; display:flex; justify-content:center; flex-wrap:wrap; gap:16px; }
//       .cf-gallery-img { width:170px; height:128px; object-fit:cover; border-radius:13px; }
//       /* --- News --- */
//       .cf-news-section { background: #fff; padding:58px 0 12px 0; }
//       .cf-news-title-row {
//         display:flex;align-items:center;justify-content:space-between;width:94%;margin:0 auto 14px auto;
//       }
//       .cf-news-title {font-size:2.25rem;font-weight:700; color: #155e63;}
//       .cf-news-link {color: #155e63; text-decoration: none; font-size:1.08rem;display:flex;align-items:center;gap:5px;}
//       .cf-news-list { display: flex; gap: 28px; justify-content: flex-start; align-items: flex-start; flex-wrap: wrap; max-width:1150px; margin:0 auto; }
//       .cf-news-item { background: #f6f6f6; border-radius:13px; overflow: hidden; width:280px; box-shadow:0 1px 4px rgba(0,0,0,0.07); transition:box-shadow .18s;}
//       .cf-news-img { width:100%; height:144px; object-fit:cover; }
//       .cf-news-info { padding:11px; }
//       .cf-news-date { font-size:0.93rem; color:#6dbdd5; margin-bottom: 3px; }
//       .cf-news-cat { font-size:0.89rem; color:#a0a0a0; }
//       .cf-news-title2 { font-weight:600; font-size:1.1rem; color:#333;line-height:1.18; margin:5px 0 0 0; }
//       /* --- Testimonials --- */
//       .cf-testimonials-section { padding:62px 0 38px 0; background:#fff; }
//       .cf-section-title2 {font-size:2.1rem;font-weight:700; color: #155e63;}
//       .cf-testimonials-desc { color:#6dbdd5;margin:16px 0 0 0;}
//       .cf-testimonials-placeholder { color:#99b1be; margin:30px 0; font-size:1rem; text-align:center; }
//       /* --- Contact section --- */
//       .cf-contact-section { padding:42px 0 49px 0; }
//       .cf-contact-title-row { display:flex;align-items:center;justify-content:space-between; width:95vw;max-width:1300px;margin:0 auto;}
//       .cf-contact-title { font-size:2.3rem;font-weight:700; color:#155e63; }
//       .cf-contact-link { color: #155e63; text-decoration: none; font-size:1rem; border-bottom:1px solid #6dbdd5; padding-bottom:1px; margin-left:14px; }
//       /* --- Project Banner --- */
//       .cf-project-banner { background: #949595; color:#fff; text-align:center; padding:54px 0; font-size:2.12rem; font-weight:700;margin-top:28px;position:relative; }
//       .cf-project-banner-btn {
//         margin-top:22px; background:transparent; color:#fff; border:2px solid #fff; padding: 11px 36px; border-radius:31px; font-size:1.1rem;font-weight:500; cursor:pointer; transition:background 0.2s, color 0.2s;
//       }
//       .cf-project-banner-btn:hover{background:#fff; color:#949595;box-shadow:0 0 7px rgba(30,30,30,0.13);}
//       /* --- Footer --- */
//       .cf-footer {
//         width: 100%; background: #f3f3f3; padding:34px 0 15px 0; font-size: 1rem; margin:0 auto; display:flex; flex-direction:column; align-items:center; border-top:1px solid #d4d4d4;
//       }
//       .cf-footer-row {
//         width: 96vw; max-width:1300px; display: flex; justify-content: space-between; flex-wrap: wrap;
//         margin: 0 auto 28px auto; gap:28px;
//       }
//       .cf-footer-col { flex: 1 1 280px; min-width: 230px; margin-bottom: 16px; }
//       .cf-footer-head { font-weight:600; margin-bottom: 7px; }
//       .cf-footer-connect-icons img { width:27px; margin-right:12px;display:inline-block;vertical-align:middle; }
//       .cf-footer-copy { width:100%;text-align:center; color:#999; margin-top:10px; font-size:0.96rem; letter-spacing:0.6px;}
//       @media (max-width:1050px){
//         .cf-expertise,
//         .cf-about,
//         .cf-news-section,
//         .cf-footer-row{ padding-left:2vw; padding-right:2vw; }
//         .cf-about-row { flex-direction:column;align-items:center; }
//       }
//       @media (max-width:900px){
//         .cf-stats-row{ flex-direction:column;gap:24px; }
//         .cf-section-title, .cf-section-title2, .cf-news-title { font-size:2rem; }
//         .cf-about-img { width:90vw; max-width:420px; }
//         .cf-news-list { flex-direction:column; align-items:center; }
//         .cf-news-item { width:97vw; max-width:355px; }
//       }
//       @media (max-width:650px){
//         .cf-navbar-content, .cf-footer-row { flex-direction:column;align-items:flex-start;gap:16px;width:96vw; }
//         .cf-news-title-row, .cf-contact-title-row { flex-direction:column;align-items:flex-start;gap:11px; }
//         .cf-hero-content { padding:14vw 4vw; }
//         .cf-steps {flex-direction:column;align-items:center;}
//         .cf-step {max-width:330px; width:100%; margin:10px 0;}
//         .cf-section-title, .cf-section-title2, .cf-news-title {font-size:1.4rem;}
//       }
//     `}</style>

//     {/* --- NAVIGATION BAR --- */}
//     <nav className="cf-navbar">
//       <div className="cf-navbar-content">
//         <img
//           src="https://ext.same-assets.com/2586384222/2440579079.svg"
//           alt="Classic Fireplace Logo"
//           className="cf-logo"
//         />
//         <div className="cf-nav-links">
//           <a href="#" className="cf-nav-link active">
//             Home
//           </a>
//           <a href="#" className="cf-nav-link">
//             About Us
//           </a>
//           <a href="#" className="cf-nav-link">
//             Brands
//           </a>
//           <a href="#" className="cf-nav-link">
//             Services
//           </a>
//           <a href="#" className="cf-nav-link">
//             Blog
//           </a>
//           <a href="#" className="cf-nav-link">
//             Contact
//           </a>
//           <img
//             src="https://ext.same-assets.com/2586384222/3803396900.svg"
//             alt="Cart"
//             className="cf-cart-icon"
//           />
//         </div>
//       </div>
//     </nav>

//     {/* --- HERO SECTION --- */}
//     <header className="cf-hero">
//       <div className="cf-hero-overlay">
//         <div className="cf-hero-content">
//           <div className="cf-hero-title">
//             Revamp Your
//             <br />
//             Hearth
//           </div>
//           <div className="cf-hero-desc">
//             Transform your old hearth into a modern masterpiece with our expert
//             renovation services.
//           </div>
//         </div>
//         <div className="cf-hero-follow">
//           FOLLOW US
//           <span className="cf-hero-socials">
//             <img
//               alt="Facebook"
//               src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
//             />
//             <img
//               alt="Linkedin"
//               src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
//             />
//             <img
//               alt="Instagram"
//               src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
//             />
//           </span>
//         </div>
//       </div>
//     </header>

//     {/* --- EXPERTISE --- */}
//     <section className="cf-expertise">
//       <h2 className="cf-section-title">Unmatched Fireplace Expertise</h2>
//       <div className="cf-section-desc">
//         Delivering warmth, comfort and style.
//       </div>
//       <div className="cf-services-row">
//         <div className="cf-services-list">
//           <ul>
//             <li>Expert Fireplace Installation</li>
//             <li>Regular Cleaning & Maintenance</li>
//             <li>Efficient Fan Installation & Service</li>
//           </ul>
//         </div>
//         <div className="cf-services-list">
//           <ul>
//             <li>Upgraded Fireplace Solutions</li>
//             <li>Seamless Wood to Gas Conversions</li>
//             <li>Fireplace Selection & Procurement</li>
//           </ul>
//         </div>
//         <div className="cf-services-list">
//           <ul>
//             <li>Custom Fireplace Design & Consulting</li>
//             <li>Emergency Repair Services</li>
//             <li>Fireplace Accessories & Parts Supply</li>
//           </ul>
//         </div>
//         <a className="cf-view-all" href="#">
//           All Services &rarr;
//         </a>
//       </div>
//       <div className="cf-stats-row">
//         <div className="cf-stat">
//           <div className="cf-stat-main">100</div>
//           <div className="cf-stat-label">Year of Combined Experience</div>
//         </div>
//         <div className="cf-stat">
//           <div className="cf-stat-main">10K+</div>
//           <div className="cf-stat-label">Fireplaces Installed</div>
//         </div>
//         <div className="cf-stat">
//           <div className="cf-stat-main">30</div>
//           <div className="cf-stat-label">Years Servicing Calgary Community</div>
//         </div>
//       </div>
//     </section>

//     {/* --- CATEGORY BANNER --- */}
//     <div className="cf-category-banner">
//       <span>GAS FIREPLACES</span>
//       <span>WOOD FIREPLACES</span>
//       <span>OUTDOOR FIREPLACES</span>
//       <span>ELECTRIC FIREPLACES</span>
//       <span>WOOD STOVES</span>
//     </div>

//     {/* --- ABOUT --- */}
//     <section className="cf-about">
//       <div className="cf-about-head">
//         <h2 className="cf-section-title">Igniting Excellence</h2>
//         <a className="cf-view-all" href="#">
//           About Us &rarr;
//         </a>
//       </div>
//       <div className="cf-section-desc">Your warmth, our passion.</div>
//       <div className="cf-about-row">
//         <img
//           className="cf-about-img"
//           src="https://ext.same-assets.com/2586384222/4265829473.jpeg"
//           alt="Showroom fireplace example"
//         />
//         <div className="cf-about-content">
//           <div className="cf-about-tabs">
//             <div className="cf-about-tab active">History</div>
//             <div className="cf-about-tab">Mission</div>
//             <div className="cf-about-tab">Vision</div>
//           </div>
//           <div className="cf-about-desc">
//             Classic Fireplace Distributors has been a beacon of warmth and
//             comfort in Calgary since 1993. With over 100 years of combined
//             experience, our team is committed to providing top-quality
//             fireplaces that enhance the beauty and coziness of any space. We are
//             proud members of CHBA Calgary Region, WETT Inc., and HPBAC -
//             organizations dedicated to quality workmanship and safe practices.
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* --- SERVICE STEPS --- */}
//     <section className="cf-steps">
//       <div className="cf-step">
//         <div className="cf-step-number">1</div>
//         <div className="cf-step-title">Personalized Consultation</div>
//         <div className="cf-step-desc">
//           Our journey together begins with a personalized consultation where our
//           experts understand your unique fireplace needs, preferences, and
//           vision.
//         </div>
//       </div>
//       <div className="cf-step">
//         <div className="cf-step-number">2</div>
//         <div className="cf-step-title">Space Evaluation & Analysis</div>
//         <div className="cf-step-desc">
//           We conduct an in-depth assessment of your space, taking precise
//           measurements and photographs to ensure the perfect fit for your new
//           fireplace.
//         </div>
//       </div>
//       <div className="cf-step">
//         <div className="cf-step-number">3</div>
//         <div className="cf-step-title">Fireplace Selection & Design</div>
//         <div className="cf-step-desc">
//           Based on your requirements and our evaluation, we guide you through
//           selecting the ideal fireplace from our extensive range that aligns
//           with your style and budget.
//         </div>
//       </div>
//       <div className="cf-step">
//         <div className="cf-step-number">4</div>
//         <div className="cf-step-title">Installation & Approval</div>
//         <div className="cf-step-desc">
//           Our skilled team ensures seamless installation of your chosen
//           fireplace, transforming your space into a warm haven. We only consider
//           our job done when you are completely satisfied.
//         </div>
//       </div>
//     </section>

//     {/* --- GALLERY --- */}
//     <div className="cf-gallery">
//       <img
//         src="https://ext.same-assets.com/2586384222/2636793825.jpeg"
//         className="cf-gallery-img"
//         alt="Gallery item 1"
//       />
//       <img
//         src="https://ext.same-assets.com/2586384222/3334035087.jpeg"
//         className="cf-gallery-img"
//         alt="Gallery item 2"
//       />
//       <img
//         src="https://ext.same-assets.com/2586384222/1348801162.png"
//         className="cf-gallery-img"
//         alt="Gallery item 3"
//       />
//     </div>

//     {/* --- NEWS --- */}
//     <section className="cf-news-section">
//       <div className="cf-news-title-row">
//         <div className="cf-news-title">Stay Informed</div>
//         <a className="cf-news-link" href="#">
//           Latest News &rarr;
//         </a>
//       </div>
//       <div className="cf-section-desc">
//         Discover the latest trends, tips and insights in the fireplace industry.
//       </div>
//       <div className="cf-news-list">
//         <div className="cf-news-item">
//           <img
//             src="https://ext.same-assets.com/2586384222/2636793825.jpeg"
//             className="cf-news-img"
//             alt="News 1"
//           />
//           <div className="cf-news-info">
//             <div className="cf-news-date">November 29, 2023 / Home Comfort</div>
//             <div className="cf-news-title2">
//               Top 10 Tips for Fireplace Efficiency: Enhance Your Home’s Warmth
//             </div>
//           </div>
//         </div>
//         <div className="cf-news-item">
//           <img
//             src="https://ext.same-assets.com/2586384222/3334035087.jpeg"
//             className="cf-news-img"
//             alt="News 2"
//           />
//           <div className="cf-news-info">
//             <div className="cf-news-date">
//               October 28, 2023 / Interior Design
//             </div>
//             <div className="cf-news-title2">
//               Latest Trends in Fireplace Designs for Interior Designers
//             </div>
//           </div>
//         </div>
//         <div className="cf-news-item">
//           <img
//             src="https://ext.same-assets.com/2586384222/1348801162.png"
//             className="cf-news-img"
//             alt="News 3"
//           />
//           <div className="cf-news-info">
//             <div className="cf-news-date">
//               September 29, 2023 / Home Comfort
//             </div>
//             <div className="cf-news-title2">
//               5 Fireplace Designs to Revolutionize Your Living Room Aesthetics
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* --- TESTIMONIALS --- */}
//     <section className="cf-testimonials-section">
//       <div className="cf-section-title2">Our Happy Customers</div>
//       <div className="cf-testimonials-desc">
//         Don't just take our word for it. Hear from those who've experienced the
//         warmth of Classic Fireplace.
//       </div>
//       <div className="cf-testimonials-placeholder">
//         (Testimonials widget/API error placeholder)
//       </div>
//     </section>

//     {/* --- CONTACT --- */}
//     <section className="cf-contact-section">
//       <div className="cf-contact-title-row">
//         <div className="cf-contact-title">Get in Touch</div>
//         <a className="cf-contact-link" href="#">
//           Contact Us &rarr;
//         </a>
//       </div>
//     </section>

//     {/* --- PROJECT BANNER --- */}
//     <div className="cf-project-banner">
//       Have a project in mind?
//       <br />
//       <button className="cf-project-banner-btn">Let's Talk &rarr;</button>
//     </div>

//     {/* --- FOOTER --- */}
//     <footer className="cf-footer">
//       <div className="cf-footer-row">
//         <div className="cf-footer-col">
//           <div className="cf-footer-head">Visit Our Showroom</div>
//           <div>
//             Our showroom is a testament to the variety and quality we offer,
//             showcasing diverse styles, types, and brands of fireplaces – from
//             wood stoves to gas inserts and zero clearance models. It's your
//             chance to visualize how our range can enhance your home's ambiance.
//             Visit us today for a firsthand look at the unique features each
//             fireplace offers.
//           </div>
//         </div>
//         <div className="cf-footer-col">
//           <div className="cf-footer-head">Calgary Showroom</div>
//           <div>
//             +1 (844) 954-4448
//             <br />
//             cfscheduling@serviceexperts.com
//             <br />
//             8002-11500 35th Street SE, Calgary, Alberta
//           </div>
//           <div className="cf-footer-head" style={{ marginTop: "10px" }}>
//             Show Room Hours
//           </div>
//           <div>
//             Monday - Friday: 8:00 am - 4:30 pm
//             <br />
//             Saturday: 10:00 am - 3:00 pm
//           </div>
//         </div>
//         <div className="cf-footer-col">
//           <div className="cf-footer-head">Connect With Us</div>
//           <div className="cf-footer-connect-icons">
//             <img
//               src="https://img.icons8.com/ios-filled/50/155e63/facebook-new.png"
//               alt="Facebook"
//             />
//             <img
//               src="https://img.icons8.com/ios-filled/50/155e63/linkedin.png"
//               alt="LinkedIn"
//             />
//             <img
//               src="https://img.icons8.com/ios-filled/50/155e63/instagram-new.png"
//               alt="Instagram"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="cf-footer-copy">©2023 CLASSIC FIREPLACE DISTRIBUTORS</div>
//     </footer>
//   </div>
// );

// export default ClassicFireplaceHomePage;
