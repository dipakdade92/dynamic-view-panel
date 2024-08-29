import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store';
import "./index.scss";
import Menu from "./Sidebar";

const App = () => {
  
  return (
    <Provider store={store}>
      <div>
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
          <Menu />
        </div>
      </div>
    </Provider>
  )
}
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)