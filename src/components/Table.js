import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function Table() {
    let sno=1;
    const [products,setProducts]=useState([{}]);
    useEffect(()=>{
        axios.get('http://localhost:3002/products')
        .then(res=>setProducts(res.data))
    },0)
    console.log(products)
    return(
        <>
        <table className='table table-borderd' style={{color:"white"}}>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>ProductId</th>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Thumbnail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                products.map((element,index)=>{
                    return(
                        <tr>
                            <td>{sno++}</td>
                            <td>{element.productId}</td>
                            <td>{element.title}</td>
                            <td>{element.brand}</td>
                            <td>{element.Price}</td>
                            <td>{element.description}</td>
                            <td><img src={element.thumbnail} id='thumb'/></td>
                            <td><td><i id="actions1" i class="fa-solid fa-pen-to-square"></i> <i id="actions2" class="fa-solid fa-trash-can"></i></td></td>
                        </tr>
                    
                    )
                }
                )
            }
            </tbody>
        </table>
      </>
   );
}