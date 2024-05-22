import React from 'react'

function Math() {
  const handleItem =()=>{
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(obj=>(console.log (obj.products)))
  }
  return (
    <div>
      <button onClick={handleItem}> submit</button>
    </div>
  )
}

export default Math
