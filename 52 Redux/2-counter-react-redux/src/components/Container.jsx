import React from 'react'

function Container({children}) {
  return (
    <div class="card" style={{ width: "80rem" }}>
     <div class="card-body">{children}</div>
    </div>
  )
}

export default Container
