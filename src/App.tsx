import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import LearnerPage from "./pages/LearnerPage";
import AlumnaiPage from "./pages/AlumnaiPage";
import AdminPage from "./pages/AdminPage";
import RquestConfirmPage from "./pages/RequestConfirmPage";
import SessionAccepted from "./pages/SessionAcceptedPage";
import PostSessionSummary from "./pages/PostSessionSummary";

// console.log(import.meta.env.VITE_BACKEND_URL);

function App() {
  return (
    <>
     <NavBar />
      <div className="min-h-screen flex flex-col justify-center bg-sky-500 text-white">
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/learner" element={<LearnerPage />} />
          <Route path="/tutor" element={<AlumnaiPage />} />
          <Route path="/admin" element={<AdminPage />} />
           <Route path="/confirm" element={<RquestConfirmPage />} />
           <Route path="/sessionaccept" element={<SessionAccepted />} />  
            <Route path="/postsession" element={<PostSessionSummary />} /> 

          <Route path='/projects' element={
            <AuthenticatedRoute>
            <ProjectsPage/> 
            </AuthenticatedRoute>
          }
          />
          {/* <Route path="/projects" element={<ProjectsPage />} /> */}

          <Route path='/projects/:projectId' element={ 
            <AuthenticatedRoute>
            <ProjectDetailsPage/>
            </AuthenticatedRoute>
          }
          />
          {/* <Route path="/projects/:projectId" element={<ProjectDetailsPage />} /> */}

          <Route path='/projects/:projectId/tasks/:taskId' element={ 
            <AuthenticatedRoute>
            <TaskPage/>
            </AuthenticatedRoute>
          }
          />
          {/* <Route path="/projects/:projectId/tasks/:taskId" element={<TaskPage />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
