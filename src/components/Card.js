import React from 'react';

export default function Card(props) {

    console.log(props.item);
    
    return (
        <div className='card'>
            {props.item.openSpot === 0 &&  <div className='card-badge'>SOLD OUT</div>}
            <img className='card-image' src={process.env.PUBLIC_URL + '/' + props.item.imgs} alt="just an logo"/>
            <div className='card-body'>
                <h4 className='card-location'>
                    <i className="fa-solid fa-star"></i>
                    {props.item.location}
                </h4>
                {props.item.title && <h4 className='card-title'> {props.item.title}</h4>}
                <h4 className='card-price'>
                    From ${props.item.price} / person
                </h4>
            </div>
        </div>
    )
}
