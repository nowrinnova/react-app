function Hello(){
  let name='Nova';
  let fullName= ()=>{
    return 'Nowrin Islam';
  }
  return <p>
    my name is {name}. <br />
    my full name is {fullName()}. 
  </p>
  
}
export default Hello;