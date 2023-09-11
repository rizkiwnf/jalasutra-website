import React, { useState } from "react";
import TopBar from "../components/navbar/topbar";
import Modal from "react-modal";

const Layanan = () => {
  const [filters, setFilters] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const categories = ["Internal Desa", "Kecamatan", "Pemkab Blitar", "Provinsi Jatim"];

  const handleFilterChange = (event) => {
    const value = event.target.value;
    if (value === "Semua") {
      setFilters(value);
    } else {
      if (filters.includes(value)) {
        setFilters(filters.filter((filter) => filter !== value));
      } else {
        setFilters([...filters, value]);
      }
    }
  };

  const isAllChecked = filters === "Semua";

  const isFilterSelected = filters.length > 0;

  return (
    <div className="layanan">
      <TopBar />
      <div className="container w-full mx-auto my-9">
        <div className="w-full p-5">
          <div className="container mx-auto flex justify-between items-center">
            <div className="relative w-4/5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
            <button
              className="px-4 py-2 text-sm font-semibold rounded-md bg-blue-500 text-white ml-5"
              onClick={toggleModal}
            >
              Filter
            </button>
          </div>
        </div>

        <Modal
          isOpen={showModal}
          onRequestClose={toggleModal}
          contentLabel="Filter Modal"
          className="modal-content"
          ariaHideApp={false}
          overlayClassName="modal-overlay"
        >
          <div>
            <h2>Kategori</h2>
            <label className="block cursor-pointer">
              <input
                type="checkbox"
                value="Semua"
                checked={isAllChecked}
                onChange={handleFilterChange}
              />
              Semua
            </label>
            {categories.map((category, index) => (
              <label key={index} className="block cursor-pointer">
                <input
                  type="checkbox"
                  value={category}
                  checked={filters.includes(category)}
                  onChange={handleFilterChange}
                />
                {category}
              </label>
            ))}
            <button
              onClick={toggleModal}
              className="px-4 py-2 mt-4 text-sm font-semibold rounded-md bg-blue-500 text-white"
            >
              Tutup
            </button>
          </div>
        </Modal>

        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sampleData
              .filter(
                (item) =>
                  filters.includes("Semua") || filters.includes(item.category)
              )
              .map((item, index) => (
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
