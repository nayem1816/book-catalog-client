import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

export type SignUpInputsType = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  const { register, handleSubmit } = useForm<SignUpInputsType>();

  const onSubmit: SubmitHandler<SignUpInputsType> = (
    data: SignUpInputsType
  ) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center p-2 mt-24">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign up to our nym-book
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email*
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password*
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Signup
            </button>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Are you registered?{" "}
            <Link
              to="/login"
              className="text-blue-700 hover:underline dark:text-blue-500">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
