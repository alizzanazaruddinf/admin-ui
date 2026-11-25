import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AtomButton from "./latihan/atoms/AtomButton.jsx";
import AtomInput from "./latihan/atoms/AtomInput.jsx";
import AtomLabel from "./latihan/atoms/AtomLabel.jsx";
import AtomCard from "./latihan/atoms/AtomCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AtomLabel />
    <AtomInput />
    <AtomButton />
    <AtomCard />
  </StrictMode>,
);