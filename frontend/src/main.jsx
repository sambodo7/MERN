import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PrivateRoute from './components/PrivateRoute.jsx';
import HomeScreen from './screens/HomeScreen.jsx'
import LoginSrceen from './screens/LoginScreen.jsx';
import RegisterSrceen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path="/" element={<HomeScreen/>}/>
      <Route path="/login" element={<LoginSrceen/>}/>
      <Route path="/register" element={<RegisterSrceen/>}/>
      {/* Private Routes */}
      <Route path="" element={<PrivateRoute/>}>
        <Route path="/profile" element={<ProfileScreen/>}/>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </Provider>
)
