import React from 'react';
import Footer from '../Footer';

export default function Destination() {
  return (
    <>
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Laxmi Vilas Palace</h2>
          <p>Laxmi Vilas Palace is one of the most majestic structures in India and was the private residence of Maharaja Sayajirao Gaekwad III. Known to be the largest private dwelling of the size equivalent to four times of the Buckingham Palace, this magnificent palace is a must-visit when in Vadodara. </p>

          <h3>Experience</h3>
          <h4>Architecture of Laxmi Vilas Palace </h4>
          <ul>
            <li>The Laxmi Vilas Palace is one of the most impressive Raj-era palaces in India till today. </li>
            <li>The palace was built with the most high-tech facilities including elevators at the time of their creation so as to make it a more appropriate place with western facilities. </li>
            <li>It has 170 rooms and it was built for just two people, i.e. the Maharaja and Maharani. </li>
            <li>A special collection of swords and weapons of war used during the Maharaja's time is displayed in the armoury. </li>
          </ul>
          <h4>Full description</h4>
          <div>
          <span>
          The grand Maharaja Fateh Singh Museum is present within the Laxmi Vilas Palace. Visitors get to see an ample amount of sculptures here which are renowned and are said to belong to the great artisans of the past. The museum showcases art which belonged to the time of the royals Maharaja Sir Sayajirao Gaekwad III and his family. On his trip to the various trips within as well as outside India, all the art and paintings collected by the Maharaja have been housed in the museum as well. Raja Ravi Varma was one of the most renowned artists of the time and his paintings based on Hindu mythology captivate people even today.</span><br/>

           <span>There are several portraits of the royal family inside the museum and one can actually feel the grandeur of the royal families which existed then. It also attracts a number of tourists due to its beauty and extensive lawns. The oriental gallery present inside the museum comprises of Chinese as well as Japanese sculptures.</span>
           </div>
          </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
              <h5>From</h5>
              <p className='price'>Rs.1000</p>
              <p className='per-person'>per person</p>
            </section>
            <button type='button' className='btn-book'>Book now</button>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
}
