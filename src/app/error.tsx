"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#639605]/20">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">¡Algo salió mal!</h2>
        <p className="text-gray-700 mb-4">
          {error.message || "Ha ocurrido un error inesperado. Intenta nuevamente."}
        </p>

        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 transition"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
