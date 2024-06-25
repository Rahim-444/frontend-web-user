export default function SettingsButton({
  title,
  onClick,
  type
}: {
  title: string;
  onClick?: () => void;
  type?: 'submit';
}) {
  return (
    <button
      onClick={onClick}
      className="text-white font-light  py-3 px-7 rounded-md bg-orange-400 mt-5 hover:bg-orange-500 focus:outline-none"
      type={type}
    >
      {title}
    </button>
  );
}
