import data from "./data";
import React from "react";
import { useState } from "react";



export default function Accordian (){
    const [selected, setSelected] = useState(null);
    const [multiple, setMultiple] = useState(false);
    const[multipleSelection, setMultipleSelection] = useState([]);
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId=== selected ? null : getCurrentId )
        
   
    }
    function handleMultipleClick(getCurrentId){
    let cpymult = [...multipleSelection];
    const findIndexOfCurrentId = cpymult.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1)
        
            cpymult.push(getCurrentId)
        
        else
            cpymult.splice(findIndexOfCurrentId,1)
        
    console.log(findIndexOfCurrentId,cpymult);
    setMultipleSelection(cpymult);


    }
    return (
    <>

    <div className="wrapper" style={{display: "flex", alignItems: "center", height: "100vh", flexDirection: "column",marginTop:"50px"}}>
       <button className="button" onClick ={()=> setMultiple(!multiple)} >enable multi selection</button>
        <div  className="accordian" style ={{flexDirection :"column",display:"flex",alignItems:"center",gap :"20px"}}>
         {
            data && data.length > 0 ? 
            data.map(dataItem => < div className="item" key={dataItem.id}>
                <div
                onClick={ () =>
                multiple ? 
                handleMultipleClick(dataItem.id)
                
                :
                handleSingleSelection(dataItem.id)} className ="text-green-500 flex justify-between align-center"style ={{ fontWeight :"500",fontSize :"20px",cursor:"pointer",flexDirection :"column",display:"flex",alignItems:"center"}}>
                    {dataItem.question}
                      <span style ={{display:"flex",justifyContent:"center"}} >+</span>
                    {
                        
                        multiple ?
                        multipleSelection.includes(dataItem.id) ?
                        <div style ={{fontSize :"15px"}}>  {dataItem.answer}</div>
: null
                        :
                         selected === dataItem.id ? 
                      
                          <div style ={{fontSize :"15px"}}>  {dataItem.answer}</div>

                           
                        
                        : null
                    }
                     </div>

                   
                </div>
            )
            : <div> No data prevent or found plz check from the server or the api calls</div>
         }

        </div>
    </div>
    
    </>
    )
}