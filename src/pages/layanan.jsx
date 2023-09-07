import React from "react";
import TopBar from "../components/navbar/topbar";

const Layanan = () => {
  return (
    <div className="layanan">
      <TopBar />
      <div className="container w-full mx-auto my-9">
        {/* search bar */}
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
        {/* end of search */}
        <div className="flex flex-wrap gap-4">
          {/* Card 1 */}
          <div className="max-w-md text-center text-sm font-semibold p-4 border rounded-lg shadow-md">
            <p className="mb-2">
              App Jalasutra
            </p>
            <p className="text-xs font-thin">Layanan surat menyurat desa di lingkup kecamatan Wates</p>
          </div>

          {/* Card 2 */}
          <div className="max-w-md text-center text-sm font-semibold p-4 border rounded-lg shadow-md">
            <p className="mb-2">
              SKM
            </p>
            <p className="text-xs font-thin">Survey Kepuasan Masyarakat milik kecamatan Wates</p>
          </div>

          {/* Card 3 */}
          <div className="max-w-md text-center text-sm font-semibold p-4 border rounded-lg shadow-md">
            <p className="mb-2">
              SKM
            </p>
            <p className="text-xs font-thin">Survey Kepuasan Masyarakat milik kecamatan Wates</p>
          </div>

          {/* Card 4 */}
          <div className="w-96 text-left text-sm font-semibold p-4 border rounded-lg shadow-md">
            <p className="mb-2">
              Ada Nama Desa Tak Biasa, Benarkah Dulunya adalah Hutan ?
            </p>
            <p className="text-xs font-thin">20 Maret 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
