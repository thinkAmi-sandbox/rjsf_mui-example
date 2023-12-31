import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Introduction} from "./components/pages/Introduction.tsx";
import {AdditionalButton} from "./components/pages/AdditionalButton.tsx";
import {Placeholder} from "./components/pages/Placeholder.tsx";
import {ChangeWidget} from "./components/pages/ChangeWidget.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Introduction />
  },
  {
    path: '/additional-button',
    element: <AdditionalButton />
  },
  {

    path: '/placeholder',
    element: <Placeholder />
  },
  {
    path: '/change-widget',
    element: <ChangeWidget />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
