import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Intro from "./features/intro/container/Intro";
const Game = lazy(() => import("./features/game/container/Game"));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/game"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Game />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
