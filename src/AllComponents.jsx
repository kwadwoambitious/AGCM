import { useState, useEffect } from "react";
import churchLogo from "../public/assets/Logo.jpg";
import publicityImg from "../public/assets/Publicity.png";
import { CgMoreVertical } from "react-icons/cg";
import { SocialMediaData } from "./data";

const AllComponents = () => {
  const [isPreLoaderVisible, setIsPreLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreLoaderVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Pre-loader */}
      <div className="relative h-svh font-poppins">
        {isPreLoaderVisible ? (
          <div className="h-svh flex items-center justify-center flex-col">
            <img
              loading="lazy"
              src={churchLogo}
              alt="logo"
              className="-mt-[120px] w-[200px]"
            />
            <p className="text-[19px] font-medium -mt-[9px]">
              Our Mission, Is Missions!
            </p>
            <div className="absolute bottom-[140px] left-0 w-full flex justify-center">
              <span className="loader"></span>
            </div>
            <div className="absolute bottom-[30px] w-full flex items-center flex-col">
              <img
                loading="lazy"
                src={publicityImg}
                alt="Publicity"
                className="w-[50px]"
              />
              <p className="text-[10px] font-medium">
                Developed by AGCM Publicity
              </p>
            </div>
          </div>
        ) : (
          <div className="h-svh font-poppins w-full bg-cover bg-center bg-background-image">
            <img
              loading="lazy"
              src={churchLogo}
              alt="logo"
              className="w-[100px] mx-auto mt-10"
            />
            <p className="text-center font-medium text-[10px] -mt-2">
              Our Missions, Is Missions!
            </p>
            <p className="text-center font-normal text-[15px] mb-4 mt-5">
              Welcome to the official link tree of AGCM KNUST #spreadtheword
            </p>
            <div className="w-full flex items-center flex-col mt-10">
              {SocialMediaData.map((social) => {
                return (
                  <a
                    key={social["social-name"]}
                    href={social["social-url"]}
                    className="bg-black max-w-[700px] w-[90%] py-2 px-3 rounded-xl flex items-center justify-between mb-6"
                  >
                    <div>
                      <img
                        loading="lazy"
                        src={social["social-image-link"]}
                        alt={social["social-name"].toLowerCase()}
                        className="w-[65px] inline"
                      />
                      <div className="inline-block align-middle ml-2">
                        <p className="text-white">{social["social-name"]}</p>
                        <p className="text-white text-[12px]">
                          {social["social-username"]}
                        </p>
                      </div>
                    </div>
                    <div>
                      <CgMoreVertical className="text-white" />
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="mt-10 bottom-[30px] w-full flex items-center flex-col">
              <img
                loading="lazy"
                src={publicityImg}
                alt="Publicity"
                className="w-[50px]"
              />
              <p className="text-[10px] font-medium">
                Developed by AGCM Publicity
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Main content section ends */}
    </>
  );
};

export default AllComponents;
