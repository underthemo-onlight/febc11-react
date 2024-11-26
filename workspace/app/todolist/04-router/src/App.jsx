import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { FadeLoader } from "react-spinners";
//import router from "./routes";
import router from "./routes-lazy";

function App() {
  return (
    <Suspense fallback={<FadeLoader color="#36D7B7" />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
