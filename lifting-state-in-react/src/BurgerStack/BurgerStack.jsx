// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.map((item, index) => (
        <li 
        key={`${item.name}-${index}`}
        style={{backgroundColor:item.color}}>
        
        <p>{item.name}</p>

        <button onClick={()=> removeFromBurger(item, index)}>-</button></li>
      ))}
    </ul>
  );
};

export default BurgerStack;
