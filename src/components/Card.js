import React, { Component } from 'react';
import { robots } from '../robots';
const Card = (props) => {
  let source = 'https://robohash.org/' + props.id;
  return (

    <div className='tc bg-light green dib br3 pa3 ma2 grow bw2 shadow-5 '>
    {/* // <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5 '> */}
      {/* <h1>Robo Friends</h1> */}
          <img src={source} />
          <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
          </div>
        </div>
  )
}


export default Card;