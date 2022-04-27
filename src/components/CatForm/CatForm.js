
import {useForm} from "react-hook-form";
import {useEffect, useReducer, useState} from "react";
import {reducer} from "../reducer/reducer";

const CatForm = () => {
    const {register, reset, handleSubmit} = useForm();
    // const initialState = {cat:''};

    const initialState = {
        cats:
        localStorage.getItem('cats') === null
        ? []
            : JSON.parse(localStorage.getItem('cats'))
    };

    const [state,dispatch] = useReducer(reducer,initialState);
    const {cat} = state;
    // const cats = [];
    // // useEffect(()=>{
    //     cats.push(cat)
    // },[cat, cats])



    // console.log(cat)
    // console.log(cats)

    // const [cat, setCat] = useState([]);
    // console.log(cat)
    // const catSubmit = (cat)=> {
    //     setCat(cat)
    // }

    useEffect(()=>{
        localStorage.setItem('cats', cat)
    },[cat])

    return (
        <form onSubmit={handleSubmit(
            (cat)=>
                dispatch({type: "field", field: 'cat', value: cat.cat})
            )}>
            <input type='text' placeholder='CatName' {...register('cat')}/>
            <button>Save</button>
            <hr/>
            {cat}
        </form>
    );
};

export {CatForm};