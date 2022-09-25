import React from 'react'

function HomeItem(props) {
    const {s ,img}=props
  return (
    <div  style={{background:`url("${img}")`,width:"100%",height:"510px", backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <div className='FleexCenter'>

      <h1>{s}</h1>
        </div>
    </div>
  )
}

export default HomeItem
