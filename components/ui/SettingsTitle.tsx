import SettingsContainer from './SettingsContainer';

export default function SettingsTitle({ title }: { title: string }) {
  return (
    <SettingsContainer className="mt-10">
      <h1 className="text-black font-semibold text-[18px] pl-8 py-4">
        {title}
      </h1>
    </SettingsContainer>
  );
}
