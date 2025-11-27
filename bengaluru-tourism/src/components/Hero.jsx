import React from 'react'
import { Link } from 'react-router-dom'
import skyline from '../assets/img/skyline-bng.jpg'

export default function Hero(){
  return (
    <section className="hero">
      <div className="left">
        <h1>Discover Bengaluru — where history meets modernity</h1>
        <p>Explore gardens, palaces, tech hubs and food streets. Plan your perfect trip with curated guides, events and suggested itineraries.</p>

        <div className="cta">
          <Link to="#destinations" className="btn btn-primary">Explore Destinations</Link>
          <Link to="/contact" className="btn btn-outline">Contact Tourist Desk</Link>
        </div>

        <div style={{marginTop:20,display:'flex',gap:12}}>
          <div style={{padding:10,background:'#fff',borderRadius:8,boxShadow:'0 6px 14px rgba(2,6,23,0.06)'}}>
            <strong>Best time:</strong> Oct – Feb
          </div>
          <div style={{padding:10,background:'#fff',borderRadius:8,boxShadow:'0 6px 14px rgba(2,6,23,0.06)'}}>
            <strong>Languages:</strong> Kannada, English, Hindi
          </div>
        </div>
      </div>

      <div className="right">
        <img 
          src={skyline}
          alt="Bengaluru skyline"
          style={{
            width:'100%',
            borderRadius:12,
            boxShadow:'0 10px 30px rgba(2,6,23,0.08)'
          }}
        />
      </div>
    </section>
  )
}
