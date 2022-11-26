import React,{useRef} from 'react'
import vid from "./sport.mp4"
function Secondpage() {
    const videoRef=useRef(null);
    const handlePlay=()=>{
        videoRef.current.play();
    }
    const handlePause=()=>{
        videoRef.current.pause();
    }
    


const handleforward=()=>{
  skip(5);
}

const handlebackward=()=>{
   skip(-5);
}

const skip=(time)=>{
    
  document.getElementById("videoId").currentTime+=time;

}

  return (
    <div className="container"  >
    <div className="top">
        Video Analytics
    </div>
    <div className="video">
        <video id='videoId' controls src={vid} width="50%" ref={videoRef} />

    </div>
    <div className="controls">
    <div className="one">
        <button onClick={handlePlay}>Play</button>

    </div>
    <div className="two">
        <button onClick={handlePause}>Pause</button>

    </div>
    <div className="three">
        <button onClick={handleforward}>5 sec forward</button>

    </div>
    <div className="four">
        <button onClick={handlebackward}>5 sec backward</button>

    </div>

    </div>
    </div>
  )
}

export default Secondpage