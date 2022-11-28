import React, {useState} from "react";
import { v4 as uuid } from "uuid";
// import items from "../data/items";



function ItemForm ({addNewItem}) {
  const [formData, setFormData] = useState({
          id: uuid(),
          name: '',
          category: 'produce' 
  })


  function handleFormData(e){
    e.preventDefault()
    const {name, value} = e.target
    setFormData({...formData, [name]:value })
  }

  function onItemFormSubmit(e){
    e.preventDefault()
    // console.log('submitted')
    const newItem = formData

    addNewItem(newItem)
  

  }

 

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}  >
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormData} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormData}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}
export default ItemForm;
