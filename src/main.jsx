import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import CheckoutPage from "./features/checkout/checkout";
import SuccessPage from "./features/checkout/success";
import HomePage from "./features/homepage/home";
import ErrorPage from "./features/template/ErrorPage";
import TemplatePage from "./features/template/template";
import { MockData } from "./Utils/mockData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{
          path: "/",
          element: <HomePage />
        },

        {
          path: "/fill-template",
          element: <TemplatePage />,
          loader: async () => {
            let stateFormData = store.getState().template.formData
            
            return stateFormData.length === 0 ? MockData : stateFormData;
          }
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
          
        },

        {
          path: "/success",
          element: <SuccessPage />,
          
        },
      {
        path: "*",
        element : <Navigate to="/" replace />
      }],
      },
  ]);

  export default router;