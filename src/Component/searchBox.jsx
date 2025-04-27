// src/components/SearchBox.jsx

import { useState } from "react";

function SearchBox({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() !== "") {
            onSearch(city); // Kirim nama kota ke App
            setCity("");    // Kosongin input setelah search
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 mt-8">
            <input
                type="text"
                placeholder="Masukkan nama kota"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
                Cari
            </button>
        </form>
    );
}

export default SearchBox;
