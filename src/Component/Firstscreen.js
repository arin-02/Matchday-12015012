import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'


function Firstscreen() {
  const [datas, setdatas] = useState();
  const [page, setpage] = useState(1);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    axios
      .get(`https://matchday.ai/referee/champ/fixture/dummy-matches?page=${page}`)
      .then(res => {
        if (datas) setdatas((prev) => [...prev, ...res.data.fixtures]);
        else setdatas(res.data.fixtures);
      }).catch(err => console.log(err));
  }, [page]);

  const handlescroll = () => {
    // console.log("Height: ",document.documentElement.scrollHeight);
    // console.log("Top: ",document.documentElement.scrollTop);
    // console.log("window: ",window.innerHeight);
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setpage((prev) => prev + 1);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handlescroll)

    return () => window.removeEventListener("scroll", handlescroll)
  }, []);


  const searchdata = (d) => {
    // console.log(d.tournament[0].name.toLowerCase().includes(searchfield));

    if (d) return d?.tournament?.[0]?.name?.toLowerCase()?.includes(searchfield) ||
      d?.team1?.[0]?.name?.toLowerCase()?.includes(searchfield) ||
      d?.team2?.[0]?.name?.toLowerCase()?.includes(searchfield)

  }




  return (
    <div className='container'>
      <div className="headlinefirstpage">
        International Matches
      </div>
      <div className="searchbox">
      
        <input type="text" value={searchfield} onChange={(ele) => { setSearchfield(ele.target.value) }} placeholder='Search for Matches' name="" id="" />
      </div>
      <div className="allcard">

        <div className="all" >
          {

            datas?.filter((d) => searchdata(d))?.map((ele, index) => <Card key={index.toString()} name1={ele.team1[0].name} name2={ele.team2[0].name} leaguename={ele.tournament[0].name} a1={ele.a1} a2={ele.a2} a3={ele.a3} b1={ele.b1} b2={ele.b2} b3={ele.b3} round={ele.round} flag={ele.team1[0].img} />)

          }
        </div>


      </div>

    </div>
  )
}

export default Firstscreen;


