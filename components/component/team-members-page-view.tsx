import React, { Fragment, useState } from 'react';
import { Button } from '@nextui-org/react';
import { Dialog, Transition } from '@headlessui/react';

const TeamMemberData = [
  {
    id: 1,
    name: 'Noman Ejaz',
    jobTitle: '-',
    role: 'Owner'
  }
];

const TeamMembersPageView = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-10/12 mx-auto">
      <div className=" pt-16 lg:flex lg:gap-x-16 lg:justify-between py-3 border-b">
        <h1 className="text-3xl font-bold">Team Members</h1>
        <button
          type="button"
          className="font-semibold bg-[#ff8601] text-white px-5 py-2 rounded-md hover:text-white"
          onClick={() => setOpen(true)}
        >
          Add Team Member
        </button>
      </div>
      <div className="border rounded-lg p-5 my-6 ">
        <h2 className="text-center text-lg md:text-2xl font-bold py-2">
          Teams Make Collaboration Easier
        </h2>
        <div className="grid grid-cols-12 gap-5 my-2 items-center">
          <div className="col-span-12 md:col-span-4 border-r px-8">
            <img
              src="https://storage.googleapis.com/freshbooks-prod-opus-ui/apps/team-member/assets/team-banner-0yzbvZAi.svg"
              className="mx-auto"
            />
            <h3 className="text-center text-sm md:text-[16px] font-bold pt-2">
              Add a Team Member
            </h3>
            <p className="text-center text-sm leading-5 text-tremor-background-emphasis">
              Manage Team Member information for free. You can also assign roles
              to collaborate more efficiently.{' '}
              <a href="#" className="text-tremor-brand-subtle ml-1">
                View Roles
              </a>
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 border-r px-8">
            <img
              src="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5808_144340)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M70%2035C70%2054.33%2054.33%2070%2035%2070C15.67%2070%200%2054.33%200%2035C0%2015.67%2015.67%200%2035%200C54.33%200%2070%2015.67%2070%2035Z'%20fill='%2368B5EB'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.1338%2053.118L24.9028%2059.3699C24.708%2059.7501%2024.2379%2059.9007%2023.8548%2059.7046C23.5109%2059.5281%2023.3542%2059.1305%2023.4729%2058.7751L25.67%2052.0931C25.9007%2051.3933%2026.657%2051.012%2027.36%2051.2416C28.0641%2051.4702%2028.4461%2052.2231%2028.2165%2052.923C28.1958%2052.9891%2028.1642%2053.0573%2028.1338%2053.118Z'%20fill='white'%20stroke='white'%20stroke-width='2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M45.3294%2052.0931L47.5276%2058.7751C47.6615%2059.1813%2047.4384%2059.6179%2047.0292%2059.7511C46.6625%2059.8725%2046.2675%2059.7024%2046.0966%2059.3698L42.8656%2053.1179C42.5272%2052.4636%2042.7851%2051.6597%2043.4446%2051.3228C44.1008%2050.9859%2044.9083%2051.2437%2045.2478%2051.8981C45.2793%2051.9598%2045.3076%2052.0291%2045.3294%2052.0931Z'%20fill='white'%20stroke='white'%20stroke-width='2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M53.7384%2038.1165C53.7384%2048.1449%2045.5723%2056.2732%2035.4996%2056.2732C25.4269%2056.2732%2017.2607%2048.1449%2017.2607%2038.1165C17.2607%2028.0892%2025.4269%2019.9609%2035.4996%2019.9609C45.5723%2019.9609%2053.7384%2028.0892%2053.7384%2038.1165Z'%20fill='%23CDE6F8'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M51.2126%2038.1161C51.2126%2046.7553%2044.1777%2053.7596%2035.4994%2053.7596C26.821%2053.7596%2019.7861%2046.7553%2019.7861%2038.1161C19.7861%2029.4779%2026.821%2022.4736%2035.4994%2022.4736C44.1777%2022.4736%2051.2126%2029.4779%2051.2126%2038.1161Z'%20fill='white'/%3e%3cpath%20d='M26.25%2015.5534V12.8494C26.25%2010.7412%2028.4036%208.51172%2030.5224%208.51172H40.5603C42.6802%208.51172%2044.75%2010.7412%2044.75%2012.8494V15.5534'%20stroke='white'%20stroke-width='2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M32.3367%2016.7891L32.4477%2017.0426L19.6316%2022.5557L19.5216%2022.3022C18.2223%2019.3079%2019.5924%2015.8694%2022.5992%2014.577L24.5254%2013.7471C27.5321%2012.4547%2031.0374%2013.7959%2032.3367%2016.7891Z'%20fill='%23CDE6F8'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M38.6628%2016.7891L38.5518%2017.0426L51.3679%2022.5557L51.4778%2022.3022C52.7783%2019.3079%2051.4071%2015.8694%2048.4003%2014.577L46.4741%2013.7471C43.4673%2012.4547%2039.9621%2013.7959%2038.6628%2016.7891Z'%20fill='%23CDE6F8'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M34.6453%2030.7197H36.8218V31.8031H36.4365C38.3388%2031.8031%2039.7981%2032.8842%2040.4706%2034.7573L37.4551%2035.6901C37.1287%2034.8093%2036.4768%2034.4637%2035.554%2034.4637C35.0349%2034.4637%2034.3634%2034.597%2034.3634%2035.247C34.3634%2035.858%2035.2275%2035.9912%2035.6889%2036.1061C36.8414%2036.3541%2038.0885%2036.5459%2039.1256%2037.1385C40.2399%2037.7874%2040.796%2038.9346%2040.796%2040.1967C40.796%2042.7014%2038.9144%2043.9808%2036.6487%2044.2484L36.8218%2044.2679V45.8864H34.6453V44.2484C32.4688%2044.0393%2030.7026%2042.7393%2030.2031%2040.5976L33.5603%2039.9671C33.8672%2041.0374%2034.6235%2041.4393%2035.6998%2041.4393C36.1993%2041.4393%2037.096%2041.3624%2037.096%2040.694C37.096%2039.9671%2036.2091%2039.8143%2035.653%2039.6995C33.3492%2039.2401%2030.818%2038.6096%2030.818%2035.7236C30.818%2033.5256%2032.4688%2032.0717%2034.6453%2031.8236V30.7197Z'%20fill='%2362B7EC'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5808_144340'%3e%3crect%20width='70'%20height='70'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              className="mx-auto"
            />
            <h3 className="text-center text-[16px] font-bold pt-2">
              Manage Campaigns
            </h3>
            <p className="text-center text-sm leading-5 text-tremor-background-emphasis">
              Save time and maintain digital campaigns with team members
              <a href="#" className="text-tremor-brand-subtle ml-1">
                Learn More
              </a>
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src="https://storage.googleapis.com/freshbooks-prod-opus-ui/apps/team-member/assets/payroll-banner-gLsDdn34.svg"
              className="mx-auto"
            />
            <h3 className="text-center text-[16px] font-bold pt-2">
              Report Management
            </h3>
            <p className="text-center text-sm leading-5 text-tremor-background-emphasis">
              Take advantage of automatically share reports between members of
              your team.
              <a href="#" className="text-tremor-brand-subtle ml-1">
                Explore Payroll
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm md:text-xl font-bold py-2">All Team Members</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                  <input
                    type="checkbox"
                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Job Title
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {TeamMemberData.map((item) => (
                <tr key={item.id}>
                  <td className="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.jobTitle}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center my-3">
          <button
            type="button"
            className="font-semibold px-5 py-2 rounded-md border-2"
          >
            View Deleted Team Member
          </button>
        </div>
        <p className="text-center text-[16px] leading-5 text-tremor-background-emphasis">
          We&apos;d like to hear your thoughts on how we can make working with your
          team better.{' '}
          <a href="#" className="text-tremor-brand-subtle ml-1">
            Share Feedback
          </a>
        </p>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                  <div className="pb-5 border-b mb-4">
                    <h2 className="text-lg md:text-2xl font-bold py-2">
                      Add Team Member
                    </h2>
                    <p className="text-sm py-1 leading-4 text-tremor-background-emphasis">
                      Add a few details to get started
                    </p>
                  </div>
                  <form>
                    <div className="grid grid-cols-12 gap-5">
                      <div className="col-span-12 md:col-span-6">
                        <label
                          htmlFor="firstname"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First Name*
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <label
                          htmlFor="lastname"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Last Name*
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email*
                        </label>
                        <div className="mt-2">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <label
                          htmlFor="role"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Role
                        </label>
                        <select
                          id="role"
                          name="role"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue="Owner"
                        >
                          <option>Owner</option>
                          <option>Member</option>
                        </select>
                      </div>
                    </div>
                  </form>
                  <div className="mt-5 sm:mt-6 flex justify-end">
                    <Button
                      className="border-0 px-4 mr-2"
                      onClick={() => setOpen(false)}
                    >
                      <p className="text-lg font-semibold text-tremor-background-emphasis">
                        Cancel
                      </p>
                    </Button>
                    <Button
                      onClick={() => setOpen(false)}
                      className="bg-[#ff8601] px-4"
                    >
                      <p className="text-lg font-semibold">Add</p>
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default TeamMembersPageView;
