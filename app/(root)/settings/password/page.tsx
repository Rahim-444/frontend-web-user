'use client';
import SettingsButton from '@/components/ui/SettingsButton';
import SettingsContainer from '@/components/ui/SettingsContainer';
import SettingsInput from '@/components/ui/SettingsInput';
import SettingsTitle from '@/components/ui/SettingsTitle';

export default function Page() {
  return (
    <div className="w-full">
      <SettingsTitle title="Password" />
      <SettingsContainer className="mt-5 mb-10">
        <div className="flex flex-col ml-8 mb-10 w-full mx-5">
          <form
            className="mt-8 "
            onSubmit={(e: any) => {
              e.preventDefault();
              console.log(
                e.target[0].value,
                e.target[1].value,
                e.target[2].value
              );
              //TODO: do the logic here
            }}
          >
            <div className="grid grid-cols-1 gap-8">
              <SettingsInput
                title="Current Password"
                type="password"
                placeholder="Current Password"
              />
              <SettingsInput
                title="New Password"
                type="password"
                placeholder="New Password"
              />
              <SettingsInput
                title="Confirm Password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <hr className="bg-[#E4E8EA] mt-5" />
            <SettingsButton title="Save" onClick={() => { }} type="submit" />
          </form>
        </div>
      </SettingsContainer>
    </div>
  );
}
