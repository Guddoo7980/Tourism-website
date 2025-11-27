import React from 'react'
import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import Attractions from '../components/Attractions'
import PlanTrip from '../components/PlanTrip'
import Events from '../components/Events'


export default function Home(){
return (
<div>
<Hero />
<Destinations />
<Attractions />
<PlanTrip />
<Events />
</div>
)
}