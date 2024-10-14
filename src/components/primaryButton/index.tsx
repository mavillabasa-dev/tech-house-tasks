/* eslint-disable @typescript-eslint/no-explicit-any */
interface IPrimaryButton {
  onClick: (...args: any[]) => any;
  label: string;
  disabled?: boolean;
}
export const PrimaryButton = ({ onClick, label, disabled = true }: IPrimaryButton) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded w-full text-white
        ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#639605] hover:bg-[#557d04]"}
      `}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
