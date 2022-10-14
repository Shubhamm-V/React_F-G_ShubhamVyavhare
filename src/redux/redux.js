const { createSlice, configureStore } = require("@reduxjs/toolkit");


// State for date entered by user
const userInfoSlice = createSlice({
  name: "info",
  initialState: {
    customerName: "",
    email: "",
    phone: "",
    quality: "",
    beverage: "",
    clean: "",
    experience: "",
  },
  reducers: {
    saveName(state, action) {
      state.customerName = action.payload;
    },
    saveEmail(state, action) {
      state.email = action.payload;
    },
    savePhone(state, action) {
      state.phone = action.payload;
    },
    saveQuality(state, action) {
      state.quality = action.payload;
    },
    saveBeverage(state, action) {
      state.beverage = action.payload;
    },
    saveClean(state, action) {
      state.clean = action.payload;
    },
    saveExperience(state, action) {
      state.experience = action.payload;
    },
    checkReview(state,action){
      state.checked = action.payload;
    }
  },
});


// State for data entered by user is valid or not
const isValidSlice = createSlice({
  name: "info",
  initialState: {
    customerName: true,
    email: true,
    phone: true,
    quality: true,
    beverage: true,
    clean: true,
    experience: true,
  },
  reducers: {
    isValidName(state, action) {
      state.customerName = action.payload;
    },
    isValidEmail(state, action) {
      state.email = action.payload;
    },
    isValidPhone(state, action) {
      state.phone = action.payload;
    },
    isValidQuality(state, action) {
      state.quality = action.payload;
    },
    isValidBeverage(state, action) {
      state.beverage = action.payload;
    },
    isValidClean(state, action) {
      state.clean = action.payload;
    },
    isValidExperience(state, action) {
      state.experience = action.payload;
    },
  },
});


// state for is form submitted or not
const submitSlice = createSlice({
  name : 'submit',
  initialState: {isSubmitted: false},
  reducers: {
      submit(state){
        state.isSubmitted = true;
      },
      notSubmit(state){
        state.isSubmitted = false;
      }
  }
})


const store = configureStore({
  reducer: { userInfo: userInfoSlice.reducer, isValid: isValidSlice.reducer, isSubmit: submitSlice.reducer},
});
export default store;

export const userActions = userInfoSlice.actions;
export const isValidActions = isValidSlice.actions;
export const isSubmitActions = submitSlice.actions;
