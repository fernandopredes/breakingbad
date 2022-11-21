import { Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home"
import {BreakingBad} from "./pages/BreakingBad"
import {BetterCallSaul} from "./pages/BetterCallSaul"

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/breaking-bad" element={<BreakingBad />} /> 
        <Route path="/better-call-soul" element={<BetterCallSaul />} /> 
    </Routes>
  )
}
