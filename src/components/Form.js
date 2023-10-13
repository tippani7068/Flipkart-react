import React from 'react';
import {useState} from 'react';
import axios from 'axios';

import { useEffect } from 'react';

export default function Form() {
    let sno=1;
    const [id,setId]=useState('')
    const [title,setTitle]=useState('')
    const [brand,setBrand]=useState('')
    const [price,setPrice]=useState('')
    const [des,setDes]=useState('')
    const [img,setImg]=useState('')
    
   const [ProductsList,setProductsList]=useState([{}])

    const productData={
        productId:id,
        title:title,
        brand:brand,
        price:price,
        description:des,
        thumbnail:img
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(' http://localhost:3002/products',productData)
        .then((res)=>{
            alert("Success")
            
        })
    }
   useEffect(()=>{
    axios.get(' http://localhost:3002/Products ')
    .then(res => setProductsList(res.data(0)))
   })

   
   
  return (
    <>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>s.no</th>
                <th>Product Id</th>
                <th>Title</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Description</th>
                <th>thumbnail</th>
                <th>Actions</th>
            </tr>
            
        </thead>
        <tbody>
        {
            ProductsList.map((e,i)=>{
                return(
                    <>
                    <tr>
                        <td>{sno++}</td>
                        <td>{e.productId}</td>
                        <td>{e.title}</td>
                        <td>{e.brand}</td>
                        <td>{e.price}</td>
                        <td>{e.description}</td>
                        <td><img src={e.thumbnail}/></td>
                        <td> 
                            <button className='btn btn-success'><i class="fa fa-edit"></i></button>
                            &nbsp;&nbsp;
                            <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
                    </>
                )
            })
        }
        </tbody>
    </table>

    <div className='row justify-content-center'>
        <div className='col-md-6 img-thumbnail'>
            <form method="post" onSubmit={handleSubmit}>
                <h3 className='text-center text-primary'>Product</h3>
                <hr/>
                <div className='mb-3'>
            <label>Id</label>
            <input type='text' className='form-control' value={id} placeholder='enter Id'
             onChange={ (e)=>{ setId(e.target.value)}   }/>
        </div>

        <div className='mb-3'>
            <label>ProductName</label>
            <input type='text' className='form-control'value={title} placeholder='enter name'
             onChange={(e)=>{ setTitle(e.target.value)}   }/>
        </div>

        <div className='mb-3'>
            <label>Brand</label>
            <input type='text' className='form-control'value={brand} placeholder='enter brand'
            onChange={(e)=>{ setBrand(e.target.value)}}/>
        </div>
       <div className='mb-3'>
            <label>price</label>
            <input type='text' className='form-control' value={price}placeholder='enter price'
             onChange={(e)=>{ setPrice(e.target.value)}}/>
        </div>

        <div className='mb-3'>
            <label>Description</label>
            <textarea type='text' className='form-control'value={des} row={4}
             onChange={(e)=>{ setDes(e.target.value)}}/>
        </div>

        <div className='mb-3'>
            <label>Url</label>
            <input type='url' className='form-control' value={img}placeholder='enter url'
             onChange={(e)=>{ setImg(e.target.value)}}/>
        </div>
          
        <button class="btn btn-success float-end">Submit</button>

            </form>
        </div>
     </div>
    </>
  )
}