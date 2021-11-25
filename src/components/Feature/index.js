import React from 'react'
import {FeatureContainer,FeatureButton} from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>pizza of the Day</h1>
            <p>
                Truffle alfredo saurce topped with 24 carat gold dust.
            </p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
