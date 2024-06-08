import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toasti
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setuName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [password, setPassword] = useState("");  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const nevigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!acceptedTerms) {
      toast.error("You must accept the terms and conditions");
      return;
    }
    try {
      // Make a POST request to your backend API endpoint
      // console.log( name, email, mobile_number, password,"all data")
      const response = await axios.post(
        "http://bhartiyabiotech.ap-south-1.elasticbeanstalk.com/user",
       { name, email, mobile_number, password } 
      );
      
    //  console.log(response,"ffffffffffff"); // Log the response data
      if (response) {
        toast.success("Registraion successful!");
        setTimeout(() => {
          nevigate("/");
        }, 2000);
        // Handle successful login, e.g., redirect or store user data
      } else {
        toast.error("Registraion failed. Please check your credentials.");
      }

      // Reset form data after successful submission

      // Optionally, redirect user to a different page or show a success message
    } catch (error) {
      console.error("Error:", error); // Log any errors
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="flex flex-col justify-center font-[sans-serif] text-[#333] sm:h-screen p-4">
    <div className="max-w-md w-full h-screen mx-auto border border-gray-300 rounded-md p-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label className="text-sm mb-2 block">Name</label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setuName(e.target.value)}
              className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Email </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Mobile Number</label>
            <input
              name="mobile_number"
              type="text"
              value={mobile_number}
              onChange={(e) => setMobile_number(e.target.value)}
              className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div>
              <label className="text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter confirm password"
              />
            </div>
         
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm">
                I accept the{" "}
                <a href="/" className="text-blue-600 font-semibold hover:underline ml-1">
                  Terms and Conditions
                </a>
              </label>
            </div>
        </div>
        <div className="!mt-10">
          <button
            type="submit"
            className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
          >
            Create an account
          </button>
        </div>
        <p className="text-sm mt-6 text-center">
          Already have an account?{" "}
          <a
            href="/"
            className="text-blue-600 font-semibold hover:underline ml-1"
          >
            Login here
          </a>
        </p>
      </form>
    </div>
    <ToastContainer />
  </div>
  );
};

export default Signup;
