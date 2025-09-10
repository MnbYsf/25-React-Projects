import React ,{useState,useEffect} from "react";


export default function Alli (){
    const [type, setType] = useState("hex");
    const [color,setColor] = useState ('#000000')

function randomColor(length){
    return Math.floor(Math.random() * length);

}
function handleCreateRandomHexColor (){
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor = "#";
    for (let i =0; i<6; i++){
        hexColor += hex[randomColor(hex.length)];

    }
    setColor(hexColor);
   
}


function handleCreateRandomRgbColor (){
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
    console.log(rgbColor)

    }


     useEffect (() =>{
    if( type === "hex"){
        handleCreateRandomHexColor();
    }
    else {
        handleCreateRandomRgbColor();}
        
    },[type])

   
    return (
        <>
        <div className=" wraper" style ={{backgroundColor : color}}>
            <div style ={{ display :"flex",flexDirection :"row",justifyContent :"center"}}>
                <button className="btn" onClick ={()=> setType("hex")}>Create Hex Color</button>
                <button className="btn" onClick ={()=> setType("rgb")}>Create Rgb Color</button>
                </div>
                <div style ={{ display :"flex",flexDirection :"row",justifyContent :"center"}}><button className="btn" onClick ={type === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor  }>Create random Color </button>
           </div>

           <div style ={{display :"flex",fontSize:"18px", justifyContent : "center",gap :"10px",flexDirection :"column",alignItems :"center"}}>   
            <h2 >{type === "hex" ? "Hex" : "Rgb"} </h2>
            <h3>Color Value : {color}</h3>
           </div>
                 
        </div>

        
        
        </>
    )
}