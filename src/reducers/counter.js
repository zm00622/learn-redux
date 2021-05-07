const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT': 
            return state -1;
        default:
            return state;
    }
};
export default counterReducer;

// The types 'INCREMENT' and 'DECREMENT' are referenced in
// the file actions > index.js 

// INCREMENT and DECREMENT are merely action types