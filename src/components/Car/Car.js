const Car = ({car}) => {
    const {id,model,price,year} = car
    return (
        <div>
            <span>{id}</span>
            <h3>{model}</h3>
            <span>{price}</span>
            <span>{year}</span>
        </div>
    );
};

export {Car};