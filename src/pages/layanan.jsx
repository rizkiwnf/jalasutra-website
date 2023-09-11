import React, { useState } from "react";
import TopBar from "../components/navbar/topbar";

const Layanan = () => {
  const [filter, setFilter] = useState("Semua");

  const sampleData = [
    // Define your sample data here
    // For example:
    {
      title: "App Jalasutra",
      description: "Layanan surat menyurat desa di lingkup kecamatan Wates",
      category: "Kecamatan", // Specify the category for each item
    },
    {
      title: "SKM",
      description: "Survey Kepuasan Masyarakat milik kecamatan Wates",
      category: "Kecamatan",
    },
    {
      title: "Cetak KTP",
      description: "Cetak E-KTP dari rumah",
      category: "Provinsi Jatim",
    },
    {
      title: "I-Mobil",
      description: "Aplikasi perizinan milik kabupaten Blitar",
      category: "Pemkab Blitar",
    },
    {
      title: "Website Blitarkab",
      description: "Website resmi pemerintah kabupaten Blitar",
      category: "Pemkab Blitar",
    },
    {
      title: "Data Kecamatan",
      description: "Informasi kecamatan dalam angka kabupaten Blitar",
      category: "Kecamatan",
    },
    {
      title: "PPDB Online",
      description: "PPDB Kabupaten Blitar",
      category: "Pemkab Blitar",
    },
    {
      title: "Bank Jatim",
      description: "Informasi kredit bank Jatim",
      category: "Provinsi Jatim",
    },
  ];

  const filteredData =
    filter === "Semua"
      ? sampleData
      : sampleData.filter((item) => item.category === filter);

  return (
    <div className="layanan">
      <TopBar />
      <div className="container w-full mx-auto my-9">
        {/* Add your search bar here */}

        {/* Search bar */}
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
        {/*End Of Search Bar*/}

        {/* Filter buttons */}
        <div className="flex space-x-4 ml-5 mb-10">
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              filter === "Semua"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => setFilter("Semua")}
          >
            Semua
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              filter === "Internal Desa"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => setFilter("Internal Desa")}
          >
            Internal Desa
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              filter === "Kecamatan"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => setFilter("Kecamatan")}
          >
            Kecamatan
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              filter === "Pemkab Blitar"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => setFilter("Pemkab Blitar")}
          >
            Pemkab Blitar
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              filter === "Provinsi Jatim"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => setFilter("Provinsi Jatim")}
          >
            Provinsi Jatim
          </button>
        </div>

        {/* Cards */}
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="max-w-md text-center text-sm font-semibold p-4 border rounded-lg shadow-md"
              >
                <p className="mb-2">{item.title}</p>
                <p className="text-xs font-thin">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
