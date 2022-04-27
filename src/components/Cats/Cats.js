import {useSelector} from "react-redux";
import {Cat} from "../Cat/Cat";

const Cats = () => {
    const {cats}= useSelector(state => state.cat)
    return (
        <div>
            <h3>Cats:</h3>
            {cats.map(cat=><Cat key={cat.id} cat={cat} />)}
        </div>
    );
};

export {Cats};