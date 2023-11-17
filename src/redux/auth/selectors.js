export const selectUser = (store) => store.auth.user;
export const selectToken = (store) => store.auth.token;
export const selectIsLoggedIn = (store) => store.auth.isLoggedIn;
export const selectIsRefreshing = (store) => store.auth.isRefreshing;
