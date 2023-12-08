import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducer/userSlice'
import accountSlice from './reducer/accountSlice'
import taskSlice from './reducer/taskSlice'
export default configureStore({
  reducer: {
    user: userSlice,
    account: accountSlice,
    task:taskSlice
  },
})