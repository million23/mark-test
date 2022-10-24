import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [route, setRoute] = useState("foods");

  return (
    <div>
      <Navbar activeLink={route} setActiveLink={setRoute} />

      {/* places */}
      {route === "places" && (
        <div
          style={{
            backgroundSize: "cover",
            background: 'url("./images/bg1.jpg")',
          }}
          className="min-h-screen grid grid-cols-4 place-content-center place-items-center gap-3"
        >
          <p className="text-2xl font-bold">JAPAN</p>
          <img
            src="./images/jap3.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/jap2.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/jap1.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <p>SOUTH KOREA</p>
          <img
            src="./images/kor2.jpeg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/kor1.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/kor3.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <p>UNITED KINGDOM</p>
          <img
            src="./images/uk2.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/uk1.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/uk3.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
        </div>
      )}
      {route === "foods" && (
        <div
          style={{
            backgroundSize: "cover",
            background: 'url("./images/bg2.jpg")',
          }}
          className="min-h-screen grid grid-cols-3 place-content-center place-items-center gap-3"
        >
          <p className="text-2xl font-bold">DONUT</p>
          <img
            src="./images/donut1.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/donut2.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <p className="text-2xl font-bold">MARSHMALLOW</p>
          <img
            src="./images/marsh1.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/marsh2.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <p className="text-2xl font-bold">FRAPPE</p>
          <img
            src="./images/frappe1.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/frappe2.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
        </div>
      )}
      {route === "hobbies" && (
        <div
          style={{
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            background: 'url("./images/bg3.png")',
          }}
          className="min-h-screen grid grid-cols-3 place-content-center place-items-center gap-3"
        >
          <p className="text-2xl font-bold">DANCING</p>
          <img
            src="./images/dance1.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/dance2.png"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <p className="text-2xl font-bold">ACTING</p>
          <img
            src="./images/act1.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/act2.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <p className="text-2xl font-bold">PLAYING ONLINE GAMES</p>
          <img
            src="./images/online1.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
          <img
            src="./images/online2.jpg"
            alt="japan"
            className="w-36 h-36 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default App;
