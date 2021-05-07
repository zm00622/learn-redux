export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};
// Calls on the switch case 'INCREMENT' in
// the countReducer reducer function (i.e., counter.js)

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};
// Calls on the switch case 'DECREMENT' in
// the counterReducer reducer function (i.e., counter.js)