import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = [];

const Userslice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((task) => task._id !== taskId);
    },
    updateTask: (state, action) => {
      const { task, _id } = action.payload;
      const index = state.findIndex((task) => task._id == _id);
      if (index !== -1) {
        const newstate = [...state];
        newstate[index] = { ...newstate[index], task, _id };
        return newstate;
      }
      return state;
    },
  },
});

const store = configureStore({
  reducer: {
    task: Userslice.reducer,
  },
});

export const { addTask, removeTask, updateTask } = Userslice.actions;

export default store;
