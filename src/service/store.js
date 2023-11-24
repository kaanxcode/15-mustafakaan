// store.js

import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../screens/HomeScreenSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
