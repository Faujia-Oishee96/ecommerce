
import { RouterProvider } from "react-router/dom";
import router from "./Component/Routes/Routes";
import store from "./Store";
import {Provider} from "react-redux"
function App() {

  return (
  <Provider store={store}>
   <RouterProvider router={router} />,
   </Provider>
  )

}

export default App
