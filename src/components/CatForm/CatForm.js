import {useRef} from "react";
import {useDispatch} from "react-redux";
import {catActions} from "../../redux";

const CatForm = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();
    const addCat = ()=>{
        dispatch(catActions.add({name:nameInput.current.value}))
        nameInput.current.value = ''
    }
    return (
        <div>
            <h2>Add Cat</h2>
            <input type='text' ref={nameInput}  />
            <button onClick={addCat}>save</button>
        </div>
    );
};

export {CatForm};