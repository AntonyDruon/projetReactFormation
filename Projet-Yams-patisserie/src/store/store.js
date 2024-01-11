import { configureStore } from "@reduxjs/toolkit";
import { gameApiSlice } from "../slices/gameApiSlice";
import { authApiSlice } from "../slices/authApiSlice";

export default configureStore({
  reducer: {
    gameApi: gameApiSlice.reducer,
    authApi: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      gameApiSlice.middleware,
      authApiSlice.middleware
    );
  },
});
