import React from 'react'

function CreatePost() {
  return (
    <div>
     <htmlForm>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="htmlForm-label">Email address</label>
    <input type="email" class="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="htmlForm-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="htmlForm-label">Password</label>
    <input type="password" class="htmlForm-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 htmlForm-check">
    <input type="checkbox" class="htmlForm-check-input" id="exampleCheck1"/>
    <label class="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</htmlForm>
    </div>
  )
}

export default CreatePost
