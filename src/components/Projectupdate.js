import React from 'react'
import './Mentordashboard.css'
function Projectupdate() {
  return (
    <>
      <div className='dummydata'>
                <h2>ProjectUpdate</h2>
                <button >Save</button>
            </div>
    <div className='comments'>
    <h5  style={{marginLeft:"2%"}}>Project</h5>
    <input type = 'text' className='inputcomments'></input>
    <button style={{marginLeft: "2%",
    width: "6%",
    height: "4vh",
    marginTop:"0%"}}>send</button>
</div>
    </>
   

  )
}

export default Projectupdate