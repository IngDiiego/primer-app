import React from 'react'
import image1 from '../assets/java.jpg'
import image2 from '../assets/node.jpg'
import image3 from '../assets/python.jpg'
import Card from './Card'

    const cards = [
        {
            id:1,
            title:'java',
            image: image1,
            instructor: "Agustin Meza"
        },
        {
            id:2,
            title:'node',
            image: image2,
            instructor: "Sheila Nav"
        },
        {
            id:3,
            title:'python',
            image: image3,
            instructor: "Pablo Ramos"
        }
    ]
export default function Cards(){
        console.log(cards)
    
  return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row'>
            {
                cards.map( c=> (
            <div className='col-md-4' key={cards.id}>
                <Card
                key={c.id}
                id={c.id}
                title = {c.title}
                image = {c.image}
                instructor = {c.instructor}
                />
            </div>
                ))
            }
        </div>
    </div>
  )
}
