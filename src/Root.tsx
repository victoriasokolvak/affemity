import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SkillsPage } from "./pages/SkillsPage";
import { EmailPage } from "./pages/EmailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goals/:goalType" element={<SkillsPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};
