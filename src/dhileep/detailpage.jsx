import React from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();

  // Example details, replace with real data as needed
  const details = {
    1: { title: 'Breakfast Items', description: 'Details about Breakfast Items', imgSrc: 'src/assets/saya/m1.jpeg' },
    2: { title: 'Lunch Items', description: 'Details about Lunch Items', imgSrc: 'src/assets/saya/m2.jpg' },
    3: { title: 'Dinner Items', description: 'Details about Dinner Items', imgSrc: 'src/assets/saya/m3.jpeg' },
    4: { title: 'Dessert and Drinks', description: 'Details about Dessert and Drinks', imgSrc: 'src/assets/saya/m4.jpeg' },
  };

  const detail = details[id];

  return (
    <div>
      <h1>{detail.title}</h1>
      <img src={detail.imgSrc} alt={detail.title} className="img-fluid" />
      <p>{detail.description}</p>
    </div>
  );
}

export default DetailPage;
