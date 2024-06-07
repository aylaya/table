import React from 'react';
import Layout from '../layout/Layout';
import './about.css';


const About = ({setRoute}) => {
  return (
    <Layout setRoute={setRoute}>
      <div className="container1">
        <div className="text-container-about">
          <h2>About our Cosmetics Company Store</h2>
       
<p>As part of The Estée Lauder Companies we offer award winning premium skincare, makeup, haircare, and fragrance products from a collection of prestigious brands including Estee Lauder, Clinique, & MAC.
</p>
<p>About Localised</p>
<p>Localised offers international ecommerce services to globally coveted fashion and lifestyle brands and retailers. We design, localize, operate, optimize, host and market country-specific international sites on behalf of these brands and retailers. To learn more, visit our corporate website at: www.localised.com.
</p>
<p>This website is operated by Localised, as authorized by The Cosmetics Company Store. Any orders you make via this website would be an offer by you to purchase products from Localised Inc..
</p> 
       </div>
        <div className="image-container-about">
          <img className="image1" src="https://cplusdesign.lk/wp-content/uploads/2023/07/Cosmetic-Shop-Design-Ideas-6.jpg" alt="Business Statistics"  width={150}/>
        </div>
      </div>
    </Layout>
  );
};

export default About;
