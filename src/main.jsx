import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/app/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
