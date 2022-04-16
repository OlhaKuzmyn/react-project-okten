
const SelectedCar = ({sCar}) => {
    const {model,price, year} =sCar

    if (sCar) {
        return (
            <div>
                <h2>Model: {model}</h2>
                <p>Price: {price}</p>
                <p>Year{year}</p>
            </div>
        );
    }
};

export {SelectedCar};