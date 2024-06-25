export default function SettingsContainer({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${className} ml-10 flex items-center bg-white rounded-md w-[90%] border-[#D7DCE0] border-1 h-fit`}
    >
      {children}
    </div>
  );
}
