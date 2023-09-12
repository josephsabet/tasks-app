import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import DashboardBasePage from "../pages/DashboardBasePage";
import TasksPage from "../pages/TasksPage";
import NewTaskPage from "../pages/NewTaskPage";
import TaskDetailsPage from "../pages/TaskDetailsPage";
import { useSelector } from "react-redux";
// import "../resources/css/custom.css"
export default function AppRoute (){
    let loggedIn =useSelector((state) => state.auth.loggedIn);
    return(
      //   <Routes>
      //   <Route
      //     path="/"
      //     element={!loggedIn ? <AuthPage /> : <Navigate to="/dashboard/tasks" />}
      //   />
      //   <Route
      //     path="/dashboard"
      //     element={loggedIn ? <DashboardBasePage /> : <Navigate to="/" />}
      //   >
      //     <Route path="/dashboard/tasks" element={<TasksPage />} />
      //     <Route path="/dashboard/tasks/new" element={<NewTaskPage />} />
      //     <Route
      //       path="/dashboard/tasks/:id/details"
      //       element={<TaskDetailsPage />}
      //     />
      //     {/* <Route path="/dashboard/tasks/details" element={<TaskDetailsPage/> }/> */}
      //   </Route>
      //   <Route
      //     path="/*"
      //     element={
      //       loggedIn ? <Navigate to="/dashboard/tasks" /> : <Navigate to="/" />
      //     }
      //   />
      // </Routes>
      <Routes>
      <Route
        path="/"
        element={!loggedIn ? <AuthPage /> : <Navigate to="/dashboard/tasks" />}
      />
      <Route
        path="/dashboard"
        element={loggedIn ? <DashboardBasePage /> : <Navigate to="/" />}
      >
        <Route path="/dashboard/tasks" element={<TasksPage />} />
        <Route path="/dashboard/tasks/new" element={<NewTaskPage />} />
        <Route
          path="/dashboard/tasks/:id/details"
          element={<TaskDetailsPage />}
        />
        {/* <Route path="/dashboard/tasks/details" element={<TaskDetailsPage/> }/> */}
      </Route>
      <Route
        path="/*"
        element={
          loggedIn ? <Navigate to="/dashboard/tasks" /> : <Navigate to="/" />
        }
      />
    </Routes>
    );
}