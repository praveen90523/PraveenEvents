import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { author, db } from "../Firebase/Fbconfig";
import { set, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleDetails = (e) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, role } = signUpDetails;

    try {
      const signupUser = await createUserWithEmailAndPassword(
        author,
        email,
        password
      );

      await updateProfile(signupUser.user, {
        displayName: name,
      });

      let roleType = role === "admin" ? "admins" : "users";

      await set(ref(db, `${roleType}/${name}`), {
        name: name,
        email: email,
        id: signupUser.user.uid,
        role: role,
      });

      toast.success("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.log(err);

      if (err.code === "auth/email-already-in-use") {
        toast.error("Email is already in use. Please login.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Invalid email address.");
      } else if (err.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters.");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmitSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={signUpDetails.name}
              onChange={handleDetails}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={signUpDetails.email}
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
              value={signUpDetails.password}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              name="role"
              value={signUpDetails.role}
              onChange={handleDetails}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-orange-500 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
