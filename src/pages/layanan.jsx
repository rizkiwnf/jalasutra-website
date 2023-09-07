import React from "react";
import TopBar from "../components/navbar/topbar";
import image1 from "./../assets/images/image-main-static.png";
import image2 from "./../assets/images/image-1.png";
import line from "./../assets/images/line-main.png";

const Layanan = () => {
  return (
    <div className="main-page">
      <TopBar />
      <div className="container w-full mx-auto my-9">
        <div className="w-full p-5">
          <div className="container mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* Magnifying glass icon */}
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                id="header-search"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Cari di sini..."
                name="search"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-96 text-center text-sm font-semibold flex flex-col gap-5">
            <div className="flex flex-wrap gap-4">
              {/* Card 1 */}
              <div className="w-96 text-center text-sm font-semibold p-4 border rounded-lg shadow-md">
                <p className="mb-2">
                  Ada Nama Desa Tak Biasa, Benarkah Dulunya adalah Hutan ?
                </p>
                <p className="text-xs font-thin">20 Maret 2023</p>
              </div>

              {/* Card 2 */}
              <div className="w-96 text-center text-sm font-semibold p-4 border rounded-lg shadow-md">
                <p className="mb-2">
                  Ada Nama Desa Tak Biasa, Benarkah Dulunya adalah Hutan ?
                </p>
                <p className="text-xs font-thin">20 Maret 2023</p>
              </div>

              {/* Card 3 */}
              <div className="w-96 text-center text-sm font-semibold p-4 border rounded-lg shadow-md">
                <p className="mb-2">
                  Ada Nama Desa Tak Biasa, Benarkah Dulunya adalah Hutan ?
                </p>
                <p className="text-xs font-thin">20 Maret 2023</p>
              </div>

              {/* Card 4 */}
              <div className="w-96 text-center text-sm font-semibold p-4 border rounded-lg shadow-md">
                <p className="mb-2">
                  Ada Nama Desa Tak Biasa, Benarkah Dulunya adalah Hutan ?
                </p>
                <p className="text-xs font-thin">20 Maret 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
