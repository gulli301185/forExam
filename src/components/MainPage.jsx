import React from 'react'
// import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDataFromServer } from '../store/actionCreator/actionCreator'
// import { useState } from 'react'
// import {  useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'





function MainPage() {
  // const navigate=useNavigate()
    const dispatch=useDispatch()
    const {datas}=useSelector((state)=>state.dataRed)
    console.log(datas);

    function getData(){
        dispatch(getDataFromServer())
    }


    function clickHandler(id,status,image,name){
      // console.log(id);
 if(id ==="Dead"){
  console.log(id);
  alert("umer")
 }
 if(id==="unknown"){
  alert("unknown")
 }
 if(id==="Alive"){
   alert("Alive")
 
 }
     
    }
  return (
    <div>
                 {/* <img src={image} alt={name} /> */}
      {/* {list && <p> <img src={image} alt={name} /></p>} */}
      <div>{datas.map((results, episode)=>{
          const {name,gender,status,id, image}=results
      
          return(
            
             <button onClick={()=>clickHandler(status,id, image,name )} key={id} style={ id%2===0 ? {background:"pink"} :{background:"grey"}}>
                  
             
                  <div> {name} </div><br />
                   <div>{gender}</div> <br/>
                   {/* <div> {status}</div> */}
                 <img src={image} alt={name} />
                   <div>{episode}</div>
               </button>
           )
         
        })}
        </div>
        
        <button onClick={getData}>Get</button>
        
    </div>

  )
}

export default MainPage