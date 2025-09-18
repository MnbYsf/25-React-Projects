import React , {useState,useEffect} from "react";
import {FaStar} from "react-icons/fa";
import "../index.css"

export default function Stars ({noOfStars}) {

    const [color,setColor] = useState ('grey');
    const[clicked,setClicked] = useState (0);
    const[hovered,setHovered] = useState (0);
    
   
    function handleStarClick(getCurrentIndex){
        setClicked(getCurrentIndex);
       
    }

      function handleStarEnter(getCurrentIndex){
        setHovered(getCurrentIndex);
       
    }

      function handleStarLeave(){
        setHovered(clicked);
        
    }
    return (
        
        <>
        
<h1 style ={{display:"flex",
flexDirection:"row",
justifyContent :"center",
fontFamily:"Roborto,sans-serif",
fontWeight:"500",textDecoration :"underline",
background : "linear-gradient(to right ,red,yellow)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent",
}}>
    This is the Stars Project :
    </h1>
    <div  style ={{display:"flex",
flexDirection:"row",
justifyContent :"center",
fontSize :"30px",
color : color,}}>
  {
        [...Array(noOfStars)].map((_,index) =>{
            return <FaStar
            className ={index +1 <= (clicked || hovered) ? "active" : "inactive" }
            onClick= {()=> handleStarClick(index +1)} onMouseEnter = { () => handleStarEnter(index +1)} onMouseLeave={handleStarLeave} key={index}
            
            />;
        })
    }

    </div>
  
        </>
   
)
}