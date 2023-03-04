const store = require(".app/store");
const { counterActions } = require("./features/counter/couterSlice");
// const {}=require("./features/counter/couterSlice")
// subscribe to state changes

console.log(`Initial State:${JSON.stringify(store.getState())}`);

// initial state 
store.subscribe(() => {
    console.log(store.getState());
});

// disptach actions 


store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

store.dispatch(counterActions.decrement());
