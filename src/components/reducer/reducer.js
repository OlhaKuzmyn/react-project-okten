

const reducer = (state,action) => {
    switch (action.type){
        case 'field':
            return {...state,[action.field]:action.value}
    }
};

export {reducer};