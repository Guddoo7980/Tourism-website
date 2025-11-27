import React from 'react'


const events = [
{title:'Flower Show - Lalbagh', date:'Feb 2026', desc:'Annual flower show attracting thousands.'},
{title:'Bengaluru Tech Summit', date:'Jan 2026', desc:'Conference for startups, investors and students.'}
]


export default function Events(){
return (
<section style={{padding:'18px 24px'}}>
<h2>Upcoming Events</h2>
<div className="grid">
{events.map(e=> (
<div className="card" key={e.title} style={{padding:12}}>
<h3 style={{marginTop:0}}>{e.title}<small style={{float:'right',fontSize:12,color:'#94a3b8'}}>{e.date}</small></h3>
<p>{e.desc}</p>
</div>
))}
</div>
</section>
)
}