import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store/store"
import App from "./App"
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostsPage from "./pages/post/PostsPage"
import UsersPage from "./pages/users/UsersPage"


const router = createBrowserRouter([
  {
    path: "/posts",
    element: <PostsPage />
  },
  {
    path: "/users",
    element: <UsersPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
