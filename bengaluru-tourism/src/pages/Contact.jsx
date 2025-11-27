import React, {useState} from 'react'


export default function Contact(){
const [form,setForm] = useState({name:'',email:'',msg:''})
const onSubmit = (e)=>{
e.preventDefault()
alert('Thanks '+form.name+' — we will contact you soon!')
setForm({name:'',email:'',msg:''})
}
return (
<section style={{padding:24,maxWidth:720,margin:'0 auto'}}>
<h2>Contact Tourist Desk</h2>
<form onSubmit={onSubmit} style={{display:'grid',gap:12}}>
<input placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
<input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
<textarea placeholder="Message" value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} rows={6} required />
<button className="btn btn-primary" type="submit">Send</button>
</form>
</section>
)
}