import {useDispatch} from "react-redux";
import {useRef} from "react";
import {dogActions} from "../../redux";

const DogForm = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();
    // const addDog = () => {
    //     dispatch(dogActions.add({name: nameInput.current.value}));
    //     nameInput.current.value = ''
    // }
    return (
        <div>
            <h2>Add Dog</h2>
            <input type='text' ref={nameInput}/>
            <button onClick={
                ()=>{
                    dispatch(dogActions.add({name: nameInput.current.value}));
                    nameInput.current.value = ''
                }
            }>save</button>
        </div>
    );
};

export {DogForm};