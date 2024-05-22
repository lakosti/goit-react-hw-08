import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  // extraReducers: (builder) =>
  //   buil der
  //     .addCase()
  //     .addCase()
  //     .addCase()
  //     .addCase()
  //     .addCase()
  //     .addCase()
  //     .addCase()
  //     .addCase()
  //     .addCase(),
});

export default authSlice.reducer;

//   extraReducers: (builder) =>
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         //* повністью перезаписуємо об'єкт user який ми отримуємо від бекенда у розділі payload і токен
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true; //* людина залогінена
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         //*коли розлогінений скидаємо дані (повертаємо все в інішиал стейт)
//         state.user = {
//           name: null,
//           email: null,
//         };
//         state.isLoggedIn = false;
//         state.token = null;
//       }),
