import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  connect } from 'react-redux';

const _Products = ({products, offerings, companies}) => {

  const processed = companies.map( company => {
    return {...company, offered: offerings.filter(offering => offering.companyId === company.id).map(offering => {
      return {...offering, product: products.find( product => product.id === offering.productId)};
    })};
  });

  return (
    <div>
          <ul>
            {
              processed.map( company => <li key={ company.id }>
                <h2>{ company.name }</h2>
                Offering:
                <ul>
                  {
                    company.offered.map( offer => <li key={ offer.id }> { offer.product.name } at { offer.price } (suggestedPrice: { offer.product.suggestedPrice })</li>)
                  }
                </ul>
              </li>)
            }
          </ul>
              <div>
      <ul>
        {
          products.map( product => <li key={product.id}>
            {product.name}
          </li>)
        }
      </ul>
    </div>
    </div>
  )
}

const Products = connect(({products, offerings, companies})=>{
  return {
    products,
    offerings,
    companies
  }
})(_Products)

export default Products
