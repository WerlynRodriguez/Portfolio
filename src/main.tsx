import ReactDOM from "react-dom/client";
import ThemeProvider from "./context/ThemeProvider";
import Loader from "./components/Loader";
import Error from "./pages/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import "./i18n";

const router = createBrowserRouter([
  {
    path: "/",
    async loader() {
      const { loader } = await import("./loaders/app.loader");
      return loader();
    },
    lazy: () => import("./pages/Home"),
    errorElement: <Error />,
  },
  {
    path: "/projects",
    lazy: () => import("./pages/Projects"),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <RouterProvider
      router={router}
      fallbackElement={
        <Loader className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      }
    />
  </ThemeProvider>
);
