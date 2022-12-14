import React from 'react'
import { useNavigate } from 'react-router-dom';


function Card(props) {

    const navigate = useNavigate()
    
    const handleclick = ()=>{

        navigate("/second")
    
   }

  return (
      
      
      
    <div className='containercard'  onClick={handleclick}>
    
        <div className="headingcard">
            {props.leaguename}
        </div>
        <div className="belowheadingcard">
            {props.round}
        </div>
        <div className="gridclass">
            <div className="icon1">
            <div className="up">
            {props.a1 + props.a2 + props.a3 > props.b1 + props.b2 + props.b3 && <img className='flagclass' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221129T093620Z&X-Amz-Expires=86400&X-Amz-Signature=1b2d2a621ec689655a7f1b4d8a7bffb70e69b857a1abe5aaae949ac3e6c16498&X-Amz-SignedHeaders=host&x-id=GetObject'/>}
            <img className='imgg' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="" />
            </div>
            <div className="down">
            {props.name1}
            </div>
            </div>
            <div className="btwicon">
            <div className="up">
            v/s
            </div>
            <div  className="mid">

                {props.a1}-{props.b1},{props.a2}-{props.b2},{props.a3}-{props.b3}
                
            </div>
            <div className="down">
            <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221129T093709Z&X-Amz-Expires=86400&X-Amz-Signature=95ff73b9a7fadf48a5bb3507c50af473e54f39e27eba80ba1cf099a6e0e1b5f9&X-Amz-SignedHeaders=host&x-id=GetObject' alt="" />
            </div>
            </div>
            <div className="icon2">
            <div className="up">
            {props.a1 + props.a2 + props.a3 < props.b1 + props.b2 + props.b3 && <img className='flagclass' src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221125T173347Z&X-Amz-Expires=86400&X-Amz-Signature=651de43c461aaeeef3bd12877156d1fed1a750cbea64c1bc56ceb394ab900e00&X-Amz-SignedHeaders=host&x-id=GetObject" />}
            <img className='imgg' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="" />
            </div>
            <div className="down">
            {props.name2}
            </div>
            </div>
        </div>
        

    </div>
       
  )
}

export default Card