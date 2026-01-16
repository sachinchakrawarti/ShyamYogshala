import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import YogaClassesInfo from "../pages/yoga-classes/YogaClassesInfo";
import OnlineYoga from "../pages/yoga-classes/OnlineYoga";
import CorporateYoga from "../pages/yoga-classes/CorporateYoga";
import PregnancyYoga from "../pages/yoga-classes/PregnancyYoga";
import YogaAtHome from "../pages/yoga-classes/YogaAtHome";
import YogaStudio from "../pages/yoga-classes/YogaStudio";
import CareerInYoga from "../pages/yoga-classes/CareerInYoga";

import DietNutrition from "../pages/DietNutrition";
import DietNutritionDetail from "../pages/DietNutritionDetail";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Login from "../pages/Login"; // Corrected import

import SearchResults from "../pages/SearchResults";

import PageNotFound from "../pages/PageNotFound";

import BlogPost from "../pages/BlogPost";
import BlogDetail from "../pages/BlogDetail";

import LearnYoga from "../pages/learn-yoga/LearnYoga";

import YogaPoses from '../pages/learn-yoga/YogaPoses';
import YogaPoseDetail from '../pages/learn-yoga/YogaPoseDetail';

import TypesOfYoga from "../pages/learn-yoga/TypesOfYoga";

import Dashboard from "../dashboard/Dashboard";
import YogaPosesCrud from "../dashboard/YogaPosesCrud";
import DashboardHome from "../dashboard/DashboardHome";
import BlogPostCrud from "../dashboard/BlogPostCrud";
import UserCrud from "../dashboard/UserCrud";

import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<SearchResults />} />

      {/* Yoga Classes Section */}
      <Route path="/yogaclassesinfo" element={<YogaClassesInfo />} />
      <Route path="/online-yoga" element={<OnlineYoga />} />
      <Route path="/corporate-yoga" element={<CorporateYoga />} />
      <Route path="/pregnancy-yoga" element={<PregnancyYoga />} />
      <Route path="/yoga-home" element={<YogaAtHome />} />
      <Route path="/yoga-studio" element={<YogaStudio />} />
      <Route path="/career-in-yoga" element={<CareerInYoga />} />

      {/* Learn Yoga Section */}
      <Route path="/learn-yoga" element={<LearnYoga />} />
      <Route path="/yoga-poses" element={<YogaPoses />} />
      <Route path="/learn-yoga/yogapose/:id" element={<YogaPoseDetail />} />
      <Route path="/types-of-yoga" element={<TypesOfYoga />} />

      {/* Diet & Nutrition */}
      <Route path="/diet-nutrition" element={<DietNutrition />} />
      <Route path="/diet-nutrition/:id" element={<DietNutritionDetail />} />

      <Route path="/register" element={<Register />} />

      {/* Blog Section */}
      <Route path="/blogs" element={<BlogPost />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />

      <Route path="/search" element={<SearchResults />} />

      {/* Fallback Route */}
      <Route path="*" element={<PageNotFound />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="yogaposes-crud" element={<YogaPosesCrud />} />
        <Route path="blogpost-crud" element={<BlogPostCrud />} />
        <Route path="user-crud" element={<UserCrud />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
