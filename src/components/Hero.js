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
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/cook.png'} alt="to cook"></img>
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/swim.png'} alt="to swim"></img>

                    <img className='image' src={process.env.PUBLIC_URL + '/images/dance.png'} alt="to dance"></img>
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/photography.png'} alt="to photo"></img>

                    <img className='image' src={process.env.PUBLIC_URL + '/images/parachute.png'} alt="to parachute"></img>
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/violin.png'} alt="to violin"></img>

                    <img className='image' src={process.env.PUBLIC_URL + '/images/piano.png'} alt="to piano"></img>
                
                    <img className='image' src={process.env.PUBLIC_URL + '/images/sing.png'} alt="to sing"></img>
                
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