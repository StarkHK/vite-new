import "./App.css";
// import debounceFunc from "./utils/debounce";
// import throttleFunc from "./utils/throttle";
// // import TestimonialCard from "./components/cards/TestimonialCard";

// function App() {
//   (function () {
//     const debounced = debounceFunc(() => {
//       console.log("this is working");
//     }, 3000);

//     const throttle = throttleFunc(() => {
//       console.log("this will now be throttled");
//     }, 199999);

//     debounced();
//     throttle();
//   })();

//   // function memoRize(func, context) {
//   //   console.log("func,,,", func);
//   //   console.log("context..", context);
//   //   const result = {};
//   //   return function (...args) {
//   //     const argsString = JSON.stringify(args);
//   //     console.log("arfs string..", argsString);

//   //     if (!result[argsString]) {
//   //       result[argsString] = func.call(context || this, ...args);
//   //     }

//   //     return result[argsString];
//   //   };
//   // }

//   // function square(num1, num2) {
//   //   for (let i = 0; i < 100000; i++) {
//   //     const b = i + i;
//   //   }

//   //   return num1 * num2;
//   // }

//   // const someMemo = memoRize(square);

//   // console.time("firstCall");
//   // console.log(someMemo(999, 222));
//   // console.timeEnd("firstCall");

//   // console.time("second");
//   // console.log(someMemo(999, 222));
//   // console.timeEnd("second");

//   return (
//     <>
//       <h1>Vite + React</h1>
//       <h1 className="text-3xl font-bold underline">Hello worlds!</h1>
//       {/* <TestimonialCard /> */}
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./routes/MainLayout";
import DashboardLayout from "./routes/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

const Home = lazy(() => import("./routes/Home"));
const Login = lazy(() => import("./routes/Login"));
const Dashboard = lazy(() => import("./routes/Dashboard"));
const Settings = lazy(() => import("./routes/Settings"));
const JobSearch = lazy(() => import("./routes/job-search"));

export default function AppRouter() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* Public Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job-search" element={<JobSearch />} />
        </Route>

        {/* Protected Dashboard Layout */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
