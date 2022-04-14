import {CarForm, Cars} from "./components";
import {useState} from "react";

const App = () => {
    const [newCar, setNewCar]=useState(null);
  return (
      <div>
        <CarForm setNewCar={setNewCar} />
          <hr/>
          <Cars newCar={newCar} />
      </div>
  );
};

export default App;
