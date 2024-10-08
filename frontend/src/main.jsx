import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Posts, { loader as postsLoader } from './routes/Posts'
import NewPost, { action as newPostAction} from './routes/NewPost'
import PostDetails, { loader as postDetailsLoader} from './routes/PostDetails'
import RootLayout from './routes/RoutLayout'

import './index.css'

const router = createBrowserRouter([
  {path: '/', 
    element: < RootLayout />,
    children: [
      {
        path: '/', 
        element: <Posts />,
        loader : postsLoader,
        children: [
          {path: '/add', element: <NewPost/>, action: newPostAction},
          {path: ':id', element: <PostDetails/>, loader: postDetailsLoader},
        ]
      },
      
    ],
  },

]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Posts /> */}
  </React.StrictMode>
)
