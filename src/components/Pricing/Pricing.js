import React from 'react'
import './Pricing.css'
import PricingCard from './PricingCard/PricingCard'

export default function Pricing() {
    return (
        <div className='Pricing' id='Pricing'>
            <div className="containerBox" id="PricingBox">
                <h1>Pricing Plan</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
                <div className='PricingCards'>
                    <PricingCard title='Basic' price='50'/>
                    <PricingCard title='PREMIUM' price='150'/>
                    <PricingCard title='UNLIMITED' price='250'/>
                </div>
            </div>
        </div>
    )
}
