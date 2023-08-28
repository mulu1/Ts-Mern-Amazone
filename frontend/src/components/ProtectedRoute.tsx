import { useContext } from 'react'
import { Store } from '../Store'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const {
    state: { UserInfo },
  } = useContext(Store)
  if (UserInfo) {
    return <Outlet />
  } else {
    return <Navigate to="/signin" />
  }
}
