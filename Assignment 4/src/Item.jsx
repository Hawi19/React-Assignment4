

  function Item  ({item, removeitem}){
   return(
    
     
    <li>
      <div className=" lists">
      <p className="item">{item}</p>
      <button onClick={removeitem} className="delete-btn">Delete</button>
      </div>

    </li>
   )
  }
  export default Item;