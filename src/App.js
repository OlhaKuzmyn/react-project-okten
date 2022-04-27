import {CatForm, Cats, DogForm, Dogs} from "./components";
import css from './App.module.css'

const App = () => {
  return (
      <div>
          <div className={css.top}>
              <CatForm/>
              <DogForm/>
          </div>
          <hr/>
          <div className={css.bottom}>
              <Cats/>
              <Dogs/>
          </div>


      </div>
  );
};

export default App;
