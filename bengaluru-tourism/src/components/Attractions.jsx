import React from 'react'


export default function Attractions(){
const list = [
{title:'Food Streets', desc:'VV Puram & Indiranagar hotspots for local and fusion cuisine.'},
{title:'PUB Culture', desc:'Live music, rooftop bars and late-night cafes in the city.'},
{title:'Art & Museums', desc:'National Gallery, Karnataka Chitrakala Parishath exhibitions.'},
{title:'Startup Tours', desc:'Silicon Valley of India — campus tours and tech meetups.'}
]
return (
<section style={{padding:'18px 24px'}}>
<h2>What to experience</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
{list.map(it=> (
<div key={it.title} className="card" style={{padding:14}}>
<h4 style={{marginTop:0}}>{it.title}</h4>
<p style={{marginBottom:0,color:'#475569'}}>{it.desc}</p>
</div>
))}
</div>
</section>
)
}