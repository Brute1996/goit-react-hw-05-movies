import { Routes, Route, Link } from "react-router-dom";
import { Home } from "pages/Home";
import { MainLayout } from "./MainLayout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          
        </Route>
        
     </Routes>
    </div>
  );
};
