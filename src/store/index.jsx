// ** Toolkit imports
import { configureStore, Dispatch } from "@reduxjs/toolkit";

// ** Reducers
import example from "store/apps/example";
import invitation from "store/apps/invitation";

export const store = configureStore({
  reducer: {
    example,
    invitation,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
