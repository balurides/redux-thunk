const loading =()=> {
    console.log('loading dispatch');
    return { type: "LOADING"};
}
export const ageUpSynch = val => {
    return { type: "AGE_UP", value: val };
};

export const ageDown = val => {
  return { type: "AGE_DOWN", value: val };
}

export const ageUp = val => {
    return dispatch => {
        dispatch(loading);
        setTimeout(() => {
            dispatch(ageUpSynch(val));
        },3000);
    }
};