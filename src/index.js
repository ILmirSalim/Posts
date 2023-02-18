import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Posts } from './pages/posts';
import { Root } from './components/Root';
import { DetailPost } from './pages/posts/detail';
import { EditPost } from './pages/posts/edit';
import { AddPost } from './pages/posts/add';
import { Auth } from './pages/auth';
import { Registration } from './pages/registration';
import { store } from './redux/store'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <App/>,
      },
      {
        path: "posts",
        element: <Posts/>,
      },
      {
        path: "posts/:id",
        element: <DetailPost/>,
      },
      {
        path: "posts/:id/edit",
        element: <EditPost/>,
      },
      {
        path: "posts/add",
        element: <AddPost/>,
      },
      {
        path: "auth",
        element: <Auth/>,
      },
      {
        path: "registration",
        element: <Registration/>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
