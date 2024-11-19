import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
export default function Contact() {
    let Navigate = useNavigate()
  let x = Yup.object({
    username: Yup.string()
      .required("userName is required")
      .min(3, "name at least 3 characters")
      .max(15, "name at most 15 characters"),
    userAge: Yup.string()
      .required("userAge is required")
      .min(1, "Please enter a vaild age ")
      .max(3, "Please enter a vaild age"),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/gm,
        "please enter a vaild password"
      ),
    email: Yup.string()
      .required("email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm,
        "please enter a vaild email"
      ),
  });
  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      userAge: "",
      email: "",
    },
    validationSchema: x,
    onSubmit: function (values) {
      console.log(values);
    },
  });
  return (
    <>
      <div className="container py-8 pt-10">
        <h1 className="mt-20 text-4xl mb-2 uppercase text-center text-[#2c3e50] font-bold">
          conatct section
        </h1>
        <div className="flex items-center justify-center pb-4 text-center">
          <span className="before:content-[''] before:block before:w-20 before:h-[4px] before:bg-[#2c3e50] before:mr-2"></span>
          <i className="fa-solid fa-star text-[#2c3e50]"></i>
          <span className="after:content-[''] after:block after:w-20 after:h-[4px] after:bg-[#2c3e50] after:ml-2"></span>
        </div>

        {/* form */}
        <form onSubmit={formik.handleSubmit} className="w-1/2 mx-auto">
          <div className="relative mb-6">
            <input
              type="text"
              name="username"
              id="hs-floating-gray-input-email"
              className="peer p-4 block w-full border-b-gray-400 border-b-2 rounded-lg text-sm placeholder:text-transparent  
    focus:outline-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
              placeholder="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username ? (
              <p className="pt-1 text-red-700 font-semibold">
                *{formik.errors.username}
              </p>
            ) : (
              ""
            )}
            <label
              htmlFor="hs-floating-gray-input-email"
              className="absolute top-0 start-0  p-4 h-full text-sm font-medium truncate pointer-events-none transition ease-in-out duration-100 border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-[#1abc9c]
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      "
            >
              User Name
            </label>
          </div>

          <div className="relative mb-6">
            <input
              name="userAge"
              type="number"
              id="hs-floating-gray-input-email"
              className="peer p-4 block w-full border-b-gray-400 border-b-2 rounded-lg text-sm placeholder:text-transparent  
    focus:outline-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
              placeholder="user Age"
              value={formik.values.userAge}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.userAge && formik.touched.userAge ? (
              <p className="pt-1 text-red-700 font-semibold">
                *{formik.errors.userAge}
              </p>
            ) : (
              ""
            )}

            <label
              htmlFor="hs-floating-gray-input-email"
              className="absolute top-0 start-0 p-4 h-full text-sm font-medium truncate pointer-events-none transition ease-in-out duration-100 border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-[#1abc9c]
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      "
            >
              User Age
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              id="hs-floating-gray-input-email"
              className="peer p-4 block w-full border-b-gray-400 border-b-2 rounded-lg text-sm placeholder:text-transparent  
    focus:outline-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
              placeholder="you@email.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="pt-1 text-red-700 font-semibold">
                *{formik.errors.email}
              </p>
            ) : (
              ""
            )}

            <label
              htmlFor="hs-floating-gray-input-email"
              className="absolute top-0 start-0 p-4 h-full text-sm font-medium truncate pointer-events-none transition ease-in-out duration-100 border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-[#1abc9c]
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      "
            >
              User Email
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              name="password"
              id="hs-floating-gray-input-email"
              className="peer p-4 block w-full border-b-gray-400 border-b-2 rounded-lg text-sm placeholder:text-transparent  
    focus:outline-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
              placeholder="*******"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="pt-1 text-red-700 font-semibold">
                *{formik.errors.password}
              </p>
            ) : (
              ""
            )}

            <label
              htmlFor="hs-floating-gray-input-email"
              className="absolute top-0 start-0 p-4 h-full text-sm font-medium truncate pointer-events-none transition ease-in-out duration-100 border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
     peer-focus:text-[#1abc9c]
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      "
            >
              User Password
            </label>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-[#1abc9c] text-white rounded-md hover:bg-[#154f43] duration-700"
            onClick={() => {
                if (formik.dirty && formik.isValid) {
                    setTimeout(() => {
                        Navigate("/home");
                    },1000)
                }
              }}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
