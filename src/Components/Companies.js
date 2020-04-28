import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  connect } from 'react-redux';

const _Companies = ({products, offerings, companies}) => {

  const processed = companies.map( company => {
    return {...company, offered: offerings.filter(offering => offering.companyId === company.id).map(offering => {
      return {...offering, product: products.find( product => product.id === offering.productId)};
    })};
  });

  return (
    <div>
          {/* <ul>
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
          </ul> */}
              <div>
      <ul>
        {
          companies.map( company => <li key={product.id}>
            {company.name}
          </li>)
        }
      </ul>
    </div>
    </div>
  )
}

const Companies = connect(({products, offerings, companies})=>{
  return {
    products,
    offerings,
    companies
  }
})(_Companies)

export default Companies
