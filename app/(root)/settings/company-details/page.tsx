'use client';
import PhoneInput from '@/components/ui/PhoneInput';
import SettingsButton from '@/components/ui/SettingsButton';
import SettingsContainer from '@/components/ui/SettingsContainer';
import SettingsInput from '@/components/ui/SettingsInput';
import SettingsTitle from '@/components/ui/SettingsTitle';
import { useState } from 'react';

export default function Page() {
  const [phone, setPhone] = useState<string>('+1');
  return (
    <div className="w-full">
      <SettingsTitle title="Company Details" />
      <SettingsContainer className="mt-5 mb-10">
        <div className="flex flex-col ml-8 mb-10 w-full mx-5">
          <form
            className="mt-8 "
            onSubmit={(e: any) => {
              e.preventDefault();
              //TODO: do the logic here
              console.log(
                e.target[0].value,
                e.target[1].value,
                e.target[2].value,
                e.target[3].value,
                e.target[4].value,
                e.target[5].value,
                e.target[6].value,
                phone + e.target[7].value,
                e.target[8].value,
                e.target[9].value,
                e.target[10].value
              );
            }}
          >
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <SettingsInput
                title="Company"
                type="text"
                placeholder="Company's Name"
              />
              <div className="w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col w-full">
                    <p className="text-[16px] text-black font-semibold">
                      Language
                    </p>
                    <select
                      required
                      className="w-full h-[3rem] mt-2 px-2 border-1 border-[#ECEDF0] rounded-md bg-[#F9FAFB] focus:outline-none text-black"
                    >
                      <option value="English (US)">English (US)</option>
                      <option value="French (CA)">French (CA)</option>
                    </select>
                  </div>
                </div>
              </div>
              <SettingsInput
                title="Street Address"
                type="text"
                placeholder="Street Address"
              />
              <SettingsInput title="City" type="text" placeholder="City" />
              <SettingsInput title="State" type="text" placeholder="State" />
              <SettingsInput title="Zip" type="text" placeholder="Zip Code" />
              <SettingsInput
                title="Country"
                type="text"
                placeholder="Country"
              />
              <PhoneInput phone={phone} setPhone={setPhone} />
              <SettingsInput
                title="VAT Number"
                type="text"
                placeholder="VAT Number"
              />
              <div className="w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col w-full">
                    <p className="text-[16px] text-black font-semibold">
                      Timezone
                    </p>
                    <select
                      required
                      className="w-full h-[3rem] mt-2 px-2 border-1 border-[#ECEDF0] rounded-md bg-[#F9FAFB] focus:outline-none text-black"
                    >
                      <option value="Eastern Time (US & Canada)">
                        Eastern Time (US & Canada)
                      </option>
                      <option value="Central Time (US & Canada)">
                        Central Time (US & Canada)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col w-full">
                    <p className="text-[16px] text-black font-semibold">
                      Website
                    </p>
                    <input
                      type="url"
                      className="w-full h-[3rem] mt-2 px-2 border-1 border-[#ECEDF0] rounded-md bg-white focus:outline-none text-black"
                      placeholder="Website"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-[#E4E8EA] mt-5" />
            <SettingsButton title="Save" onClick={() => { }} type="submit" />
          </form>
        </div>
      </SettingsContainer>
    </div>
  );
}
