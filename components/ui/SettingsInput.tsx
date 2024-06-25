export default function SettingsInput({
  title,
  placeholder,
  type
}: {
  title: string;
  placeholder?: string;
  type: string;
}) {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col w-full">
          <p className="text-[16px] text-black font-semibold">{title}</p>
          <input
            type={type}
            className="w-full h-[3rem] mt-2 px-2 border-1 border-[#ECEDF0] rounded-md bg-[#F9FAFB] focus:outline-none text-black"
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </div>
  );
}
