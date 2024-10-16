import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${currentPage === 1 && "opacity-20 cursor-not-allowed"}`}
      >
        <ChevronLeftIcon size={24} />
      </button>
      <span>{`Página ${currentPage} de ${totalPages}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon size={24} />
      </button>
    </div>
  );
};

export default Pagination;
