import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import Faq from "./Pages/Faq.jsx";
import Blog from "./Pages/Blog.jsx";
import Pricing from "./Pages/Pricing.jsx";
import Features from "./Pages/Features.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="faq" element={<Faq />} />
      <Route path="features" element={<Features />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="blog" element={<Blog />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
