import React, { useState } from 'react';

const Tour = ({id,image,info,name,price,removeTour}) => {
  const [readMore,setReadMore]=useState(false)
  return <article className='single-tour'>
    <img src={image}></img>
    <footer>
      <div className='tour-info'>
        <h4> {name} </h4>
        <h4> ${price} </h4>
      </div>
      <p>
        {readMore ? info : `${info.substring(0,256)}...`}
      </p>
      <button onClick={() =>  setReadMore(!readMore)}>
        {readMore?"show less":"show more"}
      </button>
      <button className='delete-btn' onClick={() => {removeTour(id)}}>Not intersted! </button>
    </footer>
    </article>
};

export default Tour;
