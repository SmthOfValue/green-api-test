import {
  Route,
    createBrowserRouter,
    createRoutesFromElements
  } from "react-router-dom";
import { ApiSetupPage } from "../pages/ApiSetupPage/ApiSetupPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { RootPage } from "../pages/RootPage/RootPage";

 export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<ApiSetupPage />}/>
        <Route path='chat' element={<MainPage />} />
      </Route>
    </Route>
));
