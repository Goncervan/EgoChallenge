import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={App} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
