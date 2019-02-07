const initialState = {
    age:20
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP': 
            console.log('age up', + newState.age);
            newState.age += action.value;
            break;
        case 'AGE_DOWN': 
            newState.age -= action.value;
            break;
        case 'LOADING':
        console.log('loading reducer');
            return newState.loading = true;
            break;
    }
    return newState;
};

export default reducer;