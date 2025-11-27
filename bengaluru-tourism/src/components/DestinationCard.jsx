import React from 'react'


export default function DestinationCard({title,desc,img,tag}){
return (
<article className="card">
<img src={img} alt={title} />
<div className="body">
<h3>{title} <small style={{fontSize:12,color:'#94a3b8',marginLeft:8}}>{tag}</small></h3>
<p>{desc}</p>
</div>
</article>
)
}