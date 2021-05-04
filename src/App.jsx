import "./styles/global.scss";
import { RepositoryList } from "./components/RepositoryList";
import { Counter } from "./components/Counter";
import React from "react";

export function App() {
  return (
    <React.Fragment>
      <RepositoryList />
      <Counter />
    </React.Fragment>
  );
}
