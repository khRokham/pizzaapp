import React from 'react'
import {ProductContainer,ProductsHeading,ProductsWrapper,
        ProductCard,ProductImg,ProductInfo,ProductTitle,
        ProductDesc,ProductPrice,ProductButton
        } from './ProductsElements'

const Products = ({heading,data}) => {
    return (
        <ProductContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {data.map((product,index)=>{
                        return(
                            <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                            </ProductCard>
                            
                        )
                })}
            </ProductsWrapper>
        </ProductContainer>
    )
}

export default Products
