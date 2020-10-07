import React from "react";
import Routing from "./pages/Routing";
import { FetchProvider } from "FetchProvider";

export default function App() {
  return (
    <FetchProvider>
      <Routing />
    </FetchProvider>
  );
}
