import {CarForm, Cars} from "./components";
import {useState} from "react";
import {SelectedCar} from "./components/SelectedCar";
import css from './App.module.css'

const App = () => {
    const [newCar, setNewCar]=useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [sCar, setSCar] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);

  return (
      <div>
        <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUpdateCar={setUpdateCar} />
          <hr/>
          <div className={css.wrap}>
              <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} setSCar={setSCar} updateCar={updateCar} />
              {sCar && <SelectedCar sCar={sCar} />}
          </div>

      </div>
  );
};

export default App;
