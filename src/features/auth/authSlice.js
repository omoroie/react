import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null
  }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(action.payload)) // ✅ 저장
      },
      logout: (state) => {
        state.user = null
        localStorage.removeItem('user') // ✅ 삭제
      }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
