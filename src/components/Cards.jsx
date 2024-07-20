import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="v-1.jpg"
            text="Laxmi Vilas Palace"
            label="Palace"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="v-2.png"
            text="Sayaji Baug (Kamati Baug)"
            label="Garden"
            path="/services/activity"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="v-3.jpg"
            text="Maharaja Sayajirao University"
            label="University"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="v-4.jpg"
            text="Kirti Mandir,Vadodara"
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
    </div>
  )
}

export default Cards;
