import { Main } from "./app";
import React from "react";
import REactDOM from "react-dom/client"

const container = document.getElementById("root");
const root = REactDOM.createRoot(container);
root.render(<Main/>)