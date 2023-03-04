// const configureStore=require().configureStore;

const counterReducer = require("../../counter/reducer");

const { configureStore } = require("@reduxjs/toolkit").configureStore;
// const counterReducer
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

modules.exports = store;