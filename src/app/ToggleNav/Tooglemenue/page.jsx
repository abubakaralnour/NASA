import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install icons: npm install lucide-react

export default function Togglmen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 m-2 bg-gray-800 text-white rounded"
      >
        <Menu size={18} />
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Full-Screen Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-gray-800 text-white p-4 transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold">Full-Screen Sidebar</h2>
        <ul className="mt-6">
          <li className="py-2 hover:bg-gray-700 px-2 rounded cursor-pointer">Home</li>
          <li className="py-2 hover:bg-gray-700 px-2 rounded cursor-pointer">About</li>
          <li className="py-2 hover:bg-gray-700 px-2 rounded cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}
