import React,{useState,useEffect} from 'react'
import Card from './Card'
import axios from 'axios'

function Firstscreen() {
  const [datas, setdatas] = useState();
  const [searchfield, setSearchfield] = useState("");
  const funcsearch=()=>{

  }
  useEffect(() => {
      
          axios
          .get('https://matchday.ai/referee/champ/fixture/dummy-matches?page=7')
          .then(res=>{
              // console.log(res.data.fixtures);
              setdatas(res.data.fixtures);
          }).catch(err => console.log(err));

          // (async () => {
          //     try {
          //         const response = await axios.get('https://matchday.ai/referee/champ/fixture/dummy-matches?page=0')
          //         // console.log(response)
          //         setdatas(response.data.fixtures)
          //     } catch (err) {
          //         console.log(err)
          //     }
          // })
          // ()
          
  }, []);

  if(datas){
    console.log("thishsihish = "+datas[0].a1)
  }
  console.log(searchfield)
  
  // useEffect(()=> {
  //   datas.filter((item)=>{
  //     return {

  //     }
  //   })
  // },[searchfield])


  return (
    <div className='container'>
        <div className="headlinefirstpage">
            International Matches
        </div>
        <div className="searchbox">
            <input type="text" value={searchfield} onChange={(e)=>setSearchfield(e.target.value)} placeholder='Search for Matches' name="" id="" />
        </div>
        <div className="allcard">
        {/* <Card/> */}

        <div className="all">
        {
          
          datas?.map((ele)=> <Card name1={ele.team1[0].name} name2={ele.team2[0].name} leaguename={ele.tournament[0].name} a1={ele.a1} a2={ele.a2} a3={ele.a3} b1={ele.b1} b2={ele.b2} b3={ele.b3} round={ele.round} flag={ele.team1[0].img}/>)
          
        }
        </div>
       

        </div>
    </div>
  )
}

export default Firstscreen