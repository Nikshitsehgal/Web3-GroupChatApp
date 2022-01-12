import Image from "next/image";
import Bg from "./assets/Bg.png";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate, isAuthenticating } = useMoralis();
  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-full w-full px-20 md:pr-36 items-end justify-around">
        <div className="">
          {/* Logo */}
          <h1 className="text-white font-extrabold text-5xl">
            Get into the world of
          </h1>
          <h1 className="text-pink-600 font-extrabold text-5xl mt-3">
            Metaverse!
          </h1>
          <h2 className="text-white font-medium text-xl mt-10">
            Chat with your friends on Web3 based Chat App
          </h2>
          {/* Login button */}
          <button
            onClick={authenticate}
            className="bg-transparent border-2 border-pink-600 text-pink-600 rounded-lg px-4 py-2 font-bold text-lg mt-10"
          >
            {isAuthenticating ? "Authenticating..." : "Login with Metamask"}
          </button>
        </div>
        <div className="justify-end text-gray-500">
          <p>Created by nikshit.me</p>
        </div>
      </div>
      <div className="relative w-full h-screen opacity-30 md:opacity-50">
        <Image src={Bg} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
