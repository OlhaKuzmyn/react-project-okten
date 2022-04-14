const Car = ({car}) => {
    const {id,model,price,year}=car;
    return (
        <div>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <hr/>
        </div>
    );
};

export {Car};