import React from 'react'
import './PricingCard.css'
import Button from '../../Button/Button'

export default function PricingCard(props) {
    return (
        <div className="PricingCard">
            <div className="PricingCard-header">
                <h3>{props.title}</h3>
                <h1>${props.price}/m</h1>
            </div>
            <div className="PricingCard-detail">
                <span>10 User</span>
                <span>50 Email Accounts</span>
                <span>100 MB Disk Space</span>
                <span>2 Subdomains</span>
                <span>Free Updates</span>
                <span>Support 24/7</span>
                <Button color='orange' title='Purchase'></Button>
            </div>
        </div>
    )
}
