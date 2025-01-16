// src/App.jsx

import './App.css';
import BurgerStack from './BurgerStack/BurgerStack';
import IngredientList from './IngredientList/IngredientList';

const App = () => {

  
const [stack, useStack] = useState();
const [selection, useSelection] = useState();



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
