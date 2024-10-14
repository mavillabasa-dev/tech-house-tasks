interface ISecondaryButton {
  onClick: () => void;
  label: string;
}

export const SecondaryButton = ({ label, onClick }: ISecondaryButton) => {
  return (
    <button type="button" className="px-4 py-2 text-gray-500 hover:text-gray-700 w-full" onClick={onClick}>
      {label}
    </button>
  );
};
