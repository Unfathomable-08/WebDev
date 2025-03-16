import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl flex relative">
        <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-white rounded-2xl shadow-[0_0_15px_#000000aa]" />
        
        <div className="relative z-10 w-1/2 p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Hello!</h1>
          <p className="text-gray-600 mb-6">Sign in to your account</p>

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
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[var(--secondary)] hover:underline">Forgot password?</a>
            </div>
            
            <button type="submit" className="w-full py-2 bg-[var(--primary)] text-white rounded-md hover:bg-purple-700">Sign In</button>
          </form>
          
          <p className="text-sm text-center mt-4">Don't have an account? <a href="#" className="text-[var(--secondary)] hover:underline">Create New</a></p>
        </div>

        <div className="relative z-10 w-1/2 flex flex-col justify-center items-center p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Welcome Back!</h2>
          <p className="text-center text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;