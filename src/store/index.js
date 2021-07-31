import { createSlice, configureStore } from '@reduxjs/toolkit';
const { act } = require('react-dom/cjs/react-dom-test-utils.production.min');
const redux = require('redux');


const initialStateCounter = {
    counter : 0,
    showToggle : true,
};

const initialStateAuth = {
    isloggedin : false
};



const counterSlice = createSlice({
    name : 'counter',
    initialState : initialStateCounter,

    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increse(state,action){
            state.counter = state.counter + action.payload + action.payload;
        },
        toggle(state){
            state.showToggle = !state.showToggle;
        },
    }
});

const authSlice = createSlice({
    name : 'authentication',
    initialState : initialStateAuth,

    reducers : {
        login(state){
            state.isloggedin = true;
        },
        logout(state){
            state.isloggedin = false;
        },
    }
});


const dataStore = configureStore({
    reducer : {counter : counterSlice.reducer , auth : authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authAction = authSlice.actions;
export default dataStore;

//********************************************************************************
/*
dataStore.subscribe(storeSubscriber);

dataStore.dispatch({ type : 'increment' });
dataStore.dispatch({ type : 'decrement'});

function storeSubscriber(){
    const latestState = dataStore.getState();
    console.log(latestState);
}

function storeReducer(state = initialState, action){

    if(action.type == 'increment'){
        return{
            counter : state.counter + 1,
            showToggle : state.showToggle,
        };
    }

    if(action.type == 'decrement'){
        return{
            counter : state.counter - 1,
            showToggle : state.showToggle,
        };
    }

    if(action.type == 'increse'){
        return{
            counter : state.counter + action.amount,
            showToggle : state.showToggle,
        };
    }

    if(action.type == 'toggle'){
        return{
            counter : state.counter,
            showToggle : !state.showToggle,
        };
    }

    return state;
}
*/