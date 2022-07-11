import React from 'react';

export default function Card(props) {
    
    return (
        <div className='card'>
            {props.openSpot === 0 &&  <div className='card-badge'>SOLD OUT</div>}
            <img className='card-image' src={props.imgs}/>
            <div className='card-body'>
                <h4 className='card-location'>
                <i className="fa-solid fa-star"></i>
                    {props.location}
                </h4>
                {props.title && <h4 className='card-title'> {props.title}</h4>}
                <h4 className='card-price'>
                    From ${props.price} / person
                </h4>
            </div>
        </div>
    )
}
