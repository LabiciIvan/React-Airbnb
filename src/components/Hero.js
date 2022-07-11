import React from 'react'

// import Swim from 'images/swim.png'
// import Cook from 'images/cook.png'
// import Dance from 'images/dance.png'
// import Parachute from 'images/parachute.png'
// import Violin from 'images/violin.png'
// import Photography from '../images/photography.png'
// import Piano from 'images/piano.png'
// import Sing from 'images/sing.png'



export default function Hero() {
    
    return (
        <div className='hero'>
            <div className='hero-images'>
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/cook.png'}></img>
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/swim.png'}></img>

                    <img className='image' src={process.env.PUBLIC_URL + '/images/dance.png'}></img>
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/photography.png'}></img>

                    <img className='image' src={process.env.PUBLIC_URL + '/images/parachute.png'}></img>
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/violin.png'}></img>

                    <img className='image' src={process.env.PUBLIC_URL + '/images/piano.png'}></img>
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/sing.png'}></img>
                
            </div>
            <div className='hero-info'>
                <div className='hero-title'>
                    Online Experiences
                </div>
                <div className='hero-content'>
                        Join unique interactive activities led by 
                        one-of-a-kind hosts-all without leaving home
                   
                </div>

            </div>
        </div>
    )
}