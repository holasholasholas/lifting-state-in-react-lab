// src/components/IngredientList/IngredientList.jsx




const IngredientList = (props) => {
    
    const availableIngredients = [

        { name: 'Kaiser Bun', color: 'saddlebrown' },
        { name: 'Sesame Bun', color: 'sandybrown' },
        { name: 'Gluten Free Bun', color: 'peru' },
        { name: 'Lettuce Wrap', color: 'olivedrab' },
        { name: 'Beef Patty', color: '#3F250B' },
        { name: 'Soy Patty', color: '#3F250B' },
        { name: 'Black Bean Patty', color: '#3F250B' },
        { name: 'Chicken Patty', color: 'burlywood' },
        { name: 'Lettuce', color: 'lawngreen' },
        { name: 'Tomato', color: 'tomato' },
        { name: 'Bacon', color: 'maroon' },
        { name: 'Onion', color: 'lightyellow' },
        { name: 'Cheddar Cheese', color: '#FDE18B' },
        { name: 'Swiss Cheese', color: '#F1E1A8' },
      ];
      return (
        <ul>
          {availableIngredients.map(ingredient => (
            <li key={ingredient.name} style={{ color: ingredient.color }}>
              {ingredient.name}<button onClick={() => addToStack(event.target)}>+</button>
            </li>
            
          ))}
        </ul>
      );
    };
  
  export default IngredientList;
  