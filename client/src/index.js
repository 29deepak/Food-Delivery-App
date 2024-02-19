import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import TermsAndPolicy from './components/TermsAndPolicy';
import { Provider } from 'react-redux';
import store from './store/index'
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import Order from './components/Order';
import Admin from './components/Admin';
import UserList from './components/Admin/UserList';
import PizzaList from './components/Admin/PizzaList';
import AddNewPizza from './components/Admin/AddNewPizza';
import OrderList from './components/Admin/OrderList';
import Welcome from './components/Admin/Welcome';
import EditPizza from './components/Admin/EditPizza';
import UserEdit from './components/Admin/UserEdit';


const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: ([
      {
        path: "/", element: <Home />
      }, {
        path: "/about", element: <AboutUs />,

      }, {
        path: "/contact", element: <ContactUs />,
      }, {
        path: "/termsandpolicy", element: <TermsAndPolicy />
      },
      , {
        path: "/cart", element: <Cart />
      },
      {
        path: "/login", element: <Login />
      },
      {
        path: "/register", element: <Register />
      },
      {
        path: "/order", element: <Order />
      },
      {
        path: "/admin", element: <Admin />,
        children: ([
          {
            path: "/admin", element: <Welcome />
          },
          {
            path: "/admin/userlist", element: <UserList />
          },
          {
            path: "/admin/edituserlist/:userId", element: <UserEdit />
          }, {
            path: "/admin/pizzalist", element: <PizzaList />
          },
          {
            path: "/admin/addnewpizza", element: <AddNewPizza />
          },
          {
            path: "/admin/orderlist", element: <OrderList />
          },
          {
            path: "/admin/editpizza/:pizzaId", element: <EditPizza />
          }
        ])
      }
    ])

  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
