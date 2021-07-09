import logo from "./img/Logo.svg";
function App() {
  return (
    <div className="account-login flex flex-row flex-nowrap w-full h-screen overflow-hidden">
      <div className="form-wrap p-6 w-full lg:w-128 lg:p-14">
        <div
          className="nav top flex flex-row justify-between items-center w-full pb-12"
          role="navigation"
        >
          <a
            href=""
            className="nav-left nav-back w-12 h-12 flex flex-row justify-center items-center rounded-full bg-gray-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12.2744L19.25 12.2744"
                stroke="black"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                stroke="black"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </div>
        <div className="form login">
          <div className="form-inner flex flex-col min-h-96" method="post">
            <h1 className="title titleFr text-4xl mb-8 font-bold">Login</h1>
            <label htmlFor="username" className="block mb-10">
              <span className="hidden">Number phone or email</span>
              <input
                type="text"
                className="text text-base text-gray-700 w-full h-12 border-b focus:outline-none focus:border-indigo-700 bg-transparent px-4"
                id="username"
                placeholder="Number phone or email"
              />
            </label>
            <label htmlFor="password" className="block mb-10">
              <span className="hidden">Password</span>
              <input
                type="password"
                className="text text-base text-gray-700 w-full h-12 border-b focus:outline-none focus:border-indigo-700 bg-transparent px-4"
                id="password"
                placeholder="Password"
              />
            </label>
            <div className="forgot flex flex-row justify-between items-center flex-nowrap pb-10">
              <label
                htmlFor="forgot"
                className="flex flex-row justify-center items-center flex-nowrap"
              >
                <input type="checkbox" id="forgot" name="forgot" />
                <span className="font-medium ml-2">Remember me</span>
              </label>
            </div>
            <button
              type="submit"
              className="btnSub bg-blue-600 p-4 rounded-full text-white"
              name="login"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="background w-minus-128 bg-gray-200 hidden justify-center items-center lg:flex flex-row flex-nowrap">
        <img
          src={logo}
          className="relative"
          alt="Logo Site"
          width={192}
          height={192}
        />
      </div>
    </div>
  );
}

export default App;
