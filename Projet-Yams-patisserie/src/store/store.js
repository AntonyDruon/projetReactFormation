import { configureStore } from "@reduxjs/toolkit";
import { gameApiSlice } from "../slices/gameApiSlice";
import { authApiSlice } from "../slices/authApiSlice";
import { crudApiSlice } from "../slices/crudApiSlice";

export default configureStore({
  reducer: {
    gameApi: gameApiSlice.reducer,
    authApi: authApiSlice.reducer,
    crudApi: crudApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      gameApiSlice.middleware,
      authApiSlice.middleware,
      crudApiSlice.middleware,
    );
  },
});
