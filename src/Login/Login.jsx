import React, { useState } from "react";
import { author, db } from "../Firebase/Fbconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, get } from "firebase/database";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleDetails = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginDetails;

    try {
      const userCred = await signInWithEmailAndPassword(author, email, password);

      const loggedInPerson =
        userCred.user.displayName || email.split("@")[0];

      const adminRef = ref(db, `admins/${loggedInPerson}`);
      const userRef = ref(db, `users/${loggedInPerson}`);

      const [adminData, userData] = await Promise.all([
        get(adminRef),
        get(userRef),
      ]);

      if (adminData.exists()) {
        toast.success("Successfully logged in as Admin");
        localStorage.setItem("loggedInPerson", loggedInPerson);
        localStorage.setItem("loggedInPersonRole", "admin");
        navigate("/dashboard", {
          state: { personData: adminData.val(), role: "admin" },
        });
      } else if (userData.exists()) {
        toast.success("Successfully logged in");
        localStorage.setItem("loggedInPerson", loggedInPerson);
        localStorage.setItem("loggedInPersonRole", "user");
        navigate("/home", {
          state: { personData: userData.val(), role: "user" },
        });
      } else {
        toast.error("No signed-up user found in database");
      }
    } catch (err) {
      console.error(err);

      if (err.code === "auth/invalid-credential") {
        toast.error("Invalid email or password");
      } else {
        toast.error("Failed to login. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={loginDetails.email}
              onChange={handleDetails}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginDetails.password}
              onChange={handleDetails}
              required
              className="w-full px-4 py-2 pr-12 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />

            {/* Eye Icon */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[30px] cursor-pointer text-gray-500 hover:text-orange-500"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </span>
          </div>


          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {
              localStorage.setItem("loggedInPerson", "Guest");
              localStorage.setItem("loggedInPersonRole", "guest");
              toast.info("Continuing as Guest");
              navigate("/home", {
                state: { personData: { name: "Guest" }, role: "guest" },
              });
            }}
            className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 rounded-lg transition duration-300"
          >
            Continue as Guest
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-orange-500 font-medium cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
