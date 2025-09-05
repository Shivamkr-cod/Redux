const redux = require('redux');

// 1. Initial State
const INITIAL_VALUE = {
  counter: 0
};

// 2. Reducer
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;

  if (action.type === 'INCREMENT') {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === 'DECREMENT') {
    newStore = { counter: store.counter - 1 };
  }
  else if(action.type==='addition'){
    newStore = {counter:store.counter + action.payload.number }
  }

  return newStore;
};

// 3. Create Store
const store = redux.createStore(reducer);

// 4. Subscriber
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};
store.subscribe(subscriber);

// 5. Dispatching Actions
store.dispatch({ type: 'INCREMENT' }); // { counter: 1 }
store.dispatch({ type: 'INCREMENT' }); // { counter: 2 }
store.dispatch({ type: 'DECREMENT' }); // { counter: 1 }
store.dispatch({type:'addition',payload:{number:7}});
