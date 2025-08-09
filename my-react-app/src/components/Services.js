import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Custom Software Development</h3>
          <p>We build bespoke software solutions tailored to your unique business needs.</p>
        </div>
        <div className="card">
          <h3>Web & Mobile Applications</h3>
          <p>Engage your users with beautiful and functional web and mobile apps.</p>
        </div>
        <div className="card">
          <h3>Cloud-Native Solutions</h3>
          <p>Leverage the power of the cloud with our scalable and resilient solutions.</p>
        </div>
        <div className="card">
          <h3>AI & Machine Learning Integration</h3>
          <p>Unlock the potential of your data with our AI and machine learning expertise.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
