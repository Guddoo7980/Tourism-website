import React, {useState} from 'react'


export default function PlanTrip(){
const [days,setDays] = useState(2)
const itineraries = {
1: ['Cubbon Park', 'Bangalore Palace'],
2: ['Lalbagh', 'Bangalore Palace', 'Food Walk - VV Puram'],
3: ['Lalbagh', 'Tipu Sultan Palace', 'Art Districts', 'Evening at UB City']
}
return (
<section style={{padding:'18px 24px'}}>
<h2>Plan your trip</h2>
<div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
<label>Trip length (days):</label>
<input type="range" min={1} max={5} value={days} onChange={e=>setDays(e.target.value)} />
<div style={{minWidth:220,background:'#fff',padding:12,borderRadius:10}}>
<strong>Suggested plan ({days} day(s))</strong>
<ul>
{(itineraries[days] || itineraries[3]).map((i,idx)=> <li key={idx}>{i}</li>)}
</ul>
</div>
</div>
</section>
)
}