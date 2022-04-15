import {CarForm, Cars} from "./components";
import {useState} from "react";

const App = () => {
    const [newCar, setNewCar]=useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [carId, setCarId] = useState(null);
    // const [showCar, setShowCar] = useState(true);

  return (
      <div>
        <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} carId={carId} />
          <hr/>
          <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} setCarId={setCarId}  />
      </div>
  );
};

export default App;
