// src/App.jsx

import './App.css';
import BurgerStack from './BurgerStack/BurgerStack';
import IngredientList from './IngredientList/IngredientList';

const App = () => {

  
const [stack, setStack] = useState();
const [selection, setSelection] = useState([]);

const addToStack = (ingredient) => {
  setStack([...stack, ingredient]); // Adds to end of stack
  setSelection(ingredient); // Updates current selection
};

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList />
      <BurgerStack />
      
      </section>
    </main>
  );
};

export default App;
