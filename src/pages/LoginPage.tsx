// import { useState, useContext, type ChangeEvent } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// function LoginPage() {
//   const navigate = useNavigate();
//    const { user } = useContext(AuthContext);

//   const { login } = useContext(AuthContext);
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e:ChangeEvent<HTMLInputElement>) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     await login(form.email, form.password);
    
//   };



//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div>
//       <h2 className="text-3xl mb-6 font-bold">Login</h2>

//       <form className="w-80 space-y-4" onSubmit={handleSubmit}>
//         <input name="email" placeholder="Email" onChange={handleChange} required className="w-full p-3 border rounded"/>
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-3 border rounded"/>

//         <button className="w-full p-3 bg-blue-600 text-white rounded">
//           Login
//         </button>
//       </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import { useState, useContext, useEffect, type ChangeEvent } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(form.email, form.password);
  };

  //Redirect after user is set
  useEffect(() => {
    if (!user?.role) return;

    switch (user.role) {
      case "learner":
        navigate("/learner");
        break;
      case "tutor":
        navigate("/tutor");
        break;
      case "admin":
        navigate("/admin");
        break;
      default:
        navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div>
        <h2 className="text-3xl mb-6 font-bold">Login</h2>

        <form className="w-80 space-y-4" onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />

          <button className="w-full p-3 bg-blue-600 text-white rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
