import { Drawer, HttpMethods } from "@/vite-env";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export type Notice = {
  title: string
  message: string
  url: string
  method?: HttpMethods,
  data?: any
}

export type Modal<T> = {
  title: string
  form: string | null
  url: string
  method: HttpMethods
  defaultValues?: T,
  className?: string
}


type InitialState = {
  isSubmitting: boolean
  notice: Notice
  modal: Modal<{ [key: string]: any }>
  drawer: Drawer | null
};

export const initialState: InitialState = {
  isSubmitting: false,
  notice: {
    title: "",
    message: "",
    url: "",
    method: "post",
    data: null
  },
  modal: {
    title: "",
    url: "",
    method: "post",
    form: null,
    defaultValues: {}
  },
  drawer: null
};

const MiscReducer = createSlice({
	name: "miscReducer",
	initialState,
	reducers: {
    toggleFormSubmission: (state, {payload}: {payload: boolean}) => {
			state.isSubmitting = payload;
    },

    toggleNoticeModal: (state, action: PayloadAction<Notice | undefined>) => {
      state.notice = action.payload ?? initialState.notice
    },

    toggleModal: (state, action: PayloadAction<Modal<{[key: string]: any}> | undefined>) => {
      state.modal = action.payload ?? initialState.modal
    },

    toggleDrawer: (state, action: PayloadAction<Drawer | undefined>) => {
      state.drawer = action.payload ?? null
    }
	},
});

const {actions, reducer} = MiscReducer;

export const {
  toggleFormSubmission,
  toggleNoticeModal,
  toggleModal,
  toggleDrawer
} = actions;

export default reducer;
