import React from 'react'
import { useState } from 'react'
import data from "./Data"

const Search = () => {

   const [filter,setFilter]=useState("");

   const searchText =(event)=>{
     setFilter(event.target.value); 
   }

    let dataSearch =data.cardData.filter(item=>{
      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    }
      
      )

  return (
    <div>
      <section className='py-4 container'>
      <div className="row justify-content-center">

    <div className="col-12 mb-5">
      <div className="mb-3 col-4 mx-auto text-center">
        <label className='form-lable'>Search</label>
        <input type="text"className='form-control'
          value={filter}
          onChange={searchText.bind(this)}
        />
      </div>
    </div>


      {dataSearch.map((item,index)=>{
        return(
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={item.img} className="card-img-top"/>
        <div className="card-body">
          <div className="card-title">{item.title}</div>
          <p className="card-text">{item.desc}</p>
        </div>

        </div>

        </div>

        )

      })}
       
      </div>

      </section>
    </div>
  )
}

export default Search
