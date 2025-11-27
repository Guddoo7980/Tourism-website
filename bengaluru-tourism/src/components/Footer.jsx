import React from 'react'


export default function Footer(){
return (
<footer className="footer">
<div className="cols">
<div style={{minWidth:220}}>
<h4>Bengaluru Tourism</h4>
<p style={{maxWidth:360,margin:'8px auto 0'}}>Built By Guddoo Kumar. Find attractions, events and trip plans. Replace images and copy with official content before submission.</p>
</div>
<div>
<h5>Contact</h5>
<p style={{margin:0}}>Tourist Helpline: +91 80-XXXX-XXXX</p>
<p style={{margin:0}}>Email: tourism@bengaluru.example</p>
</div>
</div>
<div style={{marginTop:12,fontSize:13}}>© {new Date().getFullYear()} Bengaluru Tourism • Made for submission</div>
</footer>
)
}