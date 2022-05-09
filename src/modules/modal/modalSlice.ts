import { PayloadBoolean } from "@/models"
import { createSlice } from "@reduxjs/toolkit"

interface ModalSlice {
  isOpenPostModal: boolean
}

const initialState: ModalSlice = {
  isOpenPostModal: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenPostModal: (state, { payload }: PayloadBoolean) => {
      state.isOpenPostModal = payload
    },
  },
})

export const { setOpenPostModal } = modalSlice.actions

export default modalSlice.reducer
