import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import { HomePage, PostPage, TagPage, UsersPage } from "./pages";

import { GOOGLE_CLIENT_ID } from "./utils/constants";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "post/:postId",
    element: <PostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "tag/:tagId",
    element: <TagPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "users",
    element: <UsersPage />,
    errorElement: <ErrorPage />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600000, // 10 minutes
      refetchInterval: 600000, // 10 minutes
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
