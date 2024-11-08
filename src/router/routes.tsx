import { createBrowserRouter } from "react-router-dom";

//Pages
import { App } from "../App";
import { Home } from "../pages/home";
import { ContextProvider } from "../context/context";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <ContextProvider>
                        <Home />
                    </ContextProvider>
                )
            }
        ]
    }
]);