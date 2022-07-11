import React from "react";
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './index.css'
import Data from './AirBnbData'

const cards = Data.map((item) => {return <Card  key={item.id}
                                                openSpot={item.openSpot}
                                                location = {item.location} 
                                                title = {item.title}
                                                price = {item.price}
                                                imgs = {item.imgs}
                                          />
});

function App() {

  return (
    <React.Fragment>  
      <NavBar />
      <Hero/>
      <div className="section-card">
        {cards}
      </div>
    </React.Fragment>
    
  )
}


export default App;
