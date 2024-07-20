import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './Services.css';

export default function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <section className='heading'>
        <h2>Activities we think you would enjoy</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="v-6.webp"
              text=" Vadodara Museum And Picture Gallery"
              label="Museum"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="v-7.webp"
              text=" Jambughoda Wildlife Sanctuary"
              label="Adventure"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="v-8.webp"
              text=" Sursagar Lake"
              label="Lake"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="v-9.webp"
              text="Sardar Patel Planetarium"
              label="Mystery"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="v-10.webp"
              text="Hazira Maqbara"
              label="Mystery"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>

      <section className='heading'>
        <h2>Explore these destinations</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="v-1.jpg"
              text="Laxmi Vilas Palace,Vadodara"
              label="Palace"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="v-2.png"
              text="Sayaji Baug"
              label="Garden"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="v-3.jpg"
              text="Maharaja Sayaji Rao University"
              label="university"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="v-4.jpg"
              text="Kirti Mandir"
              label="Temple"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="v-5.jpg"
              text="Ajwa Water Park"
              label="Water Park"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  
  
  );
}