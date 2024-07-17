import { configureStore, type Middleware } from '@reduxjs/toolkit';
import stepsReducer from '@/store/slices/stepSlice.ts';
import personalInfoReducer from '@/store/slices/personalInfoSlice.ts';
import plansReducer from '@/store/slices/planSlice.ts';
import addOnsReducer from '@/store/slices/addOnSlice.ts';

const persistanceLocalStorageMiddleware: Middleware =
  store => next => action => {
    next(action);
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()));
  };

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
    personalInfo: personalInfoReducer,
    plans: plansReducer,
    addon: addOnsReducer,
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
