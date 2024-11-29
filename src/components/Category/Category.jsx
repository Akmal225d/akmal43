import React from 'react'
import s from './Category.module.scss'
import Products from '/public/products.json'
import Card from '../Card/Card'
const Category = () => {
  return (
<>

<section className={s.Category}>
    <div className="container">
        <div className={s.wrapper}>

            {Products.map(card => (
                <Card key={card.id} image={card.image} nme={card.name} price={card.price}/>
            ))}
        </div>
    </div>
</section>
</>
  )
}   

export default Category
