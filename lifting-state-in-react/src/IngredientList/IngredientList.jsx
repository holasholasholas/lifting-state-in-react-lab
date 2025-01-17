// src/components/IngredientList/IngredientList.jsx



const IngredientList = ({availableIngredients, addToBurger}) => {
  
  return (
  <ul>
    
    {availableIngredients.map((ingredient)=>(
      <li key={ingredient.name} style={{backgroundColor: ingredient.color}}>
      <p>{ingredient.name}</p>
      <button onClick={() => addToBurger(ingredient)}>+</button>
   
      </li>
    ))}

  </ul>
  )
};


export default IngredientList;



