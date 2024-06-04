import { useState } from "react";
import Paragraph from "./Paragraph";
import {data} from "./content"

function Lorem({number , setNumber}){
    const [para,setPara] = useState([]);
      
   function generatePara(){
      setPara(data.filter((text)=>{
         return text.id <= number;
      }))
   }
    return(
       <>
         <div className="lorem-container">
            <h1>TIRED OF BORING LOREM IPSUM?</h1>
            <div className="input-box">
               <p>Paragraphs:</p>
               <input type="number" min={0} max={10} value={number} onChange={(e)=>{setNumber(e.currentTarget.value)}}/>
               <button className="btn" onClick={()=>generatePara()}>Generate</button>
            </div>
   
            <div className="content">
             {para.map((content,index)=>{
                return <Paragraph key={index} text={content.text} count={content.id}/>
             })}
            </div>
         </div>
       </>
    )
   
   }
   export default Lorem;