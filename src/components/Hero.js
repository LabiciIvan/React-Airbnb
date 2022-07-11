import React from 'react'
import Swim from '../images/swim.png'
import Cook from '../images/cook.png'
import Dance from '../images/dance.png'
import Parachute from '../images/parachute.png'
import Violin from '../images/violin.png'
import Photography from '../images/photography.png'
import Piano from '../images/piano.png'
import Sing from '../images/sing.png'



export default function Hero() {
    
    return (
        <div className='hero'>
            <div className='hero-images'>
                
                    <img className='image' src={Cook}></img>
                
                    <img className='image' src={Swim}></img>

                    <img className='image' src={Dance}></img>
                
                    <img className='image' src={Photography}></img>

                    <img className='image' src={Parachute}></img>
                
                    <img className='image' src={Violin}></img>

                    <img className='image' src={Piano}></img>
                
                    <img className='image' src={Sing}></img>
                
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