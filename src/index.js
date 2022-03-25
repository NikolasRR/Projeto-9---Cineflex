import { render } from "react-dom";
import App from "./Components/App";

import "./assets/css/reset.css";
import "./assets/css/style.css";



const root = document.querySelector(".root");
render(<App />, root);  
