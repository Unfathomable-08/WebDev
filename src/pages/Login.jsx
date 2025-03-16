import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Cloud from "../components/cloud";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl flex overflow-hidden">
        {/* Cloud positioned at bottom-right */}
        <div className="absolute bottom-[-20px] right-[-20px] z-5">
          <Cloud />
        </div>

        {/* Cloud positioned at bottom-right */}
        <div className="absolute top-[-20px] left-[-120px] z-5 rotate-x-180">
          <Cloud />
        </div>

        <div className="relative z-10 w-1/2 p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Hello!</h1>
          <p className="text-black mb-6">Sign in to your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-[var(--primary)]" />
              <input
                type="email"
                placeholder="E-mail"
                {...register("email", { required: true })}
                className="pl-10 pr-4 py-2 w-full border rounded-md focus:ring focus:ring-purple-400 bg-white"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-[var(--primary)]" />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="pl-10 pr-4 py-2 w-full border rounded-md focus:ring focus:ring-purple-400"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded-[4px] bg-white checked:bg-[var(--primary)] checked:border-[var(--primary)] accent-[var(--primary)]"
                />
                <span>Remember me</span>
              </label>

              <a href="#" className="text-[var(--secondary)] hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--secondary)]"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-[var(--secondary)] hover:underline">
              Create New
            </a>
          </p>
        </div>

        <div className="relative z-10 w-1/2 flex flex-col justify-center items-center p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Welcome Back!</h2>
          <p className="text-center text-sm mt-2">
            Craving something delicious? Sign in to order your favorites!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
