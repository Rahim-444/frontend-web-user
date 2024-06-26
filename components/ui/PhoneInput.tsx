import { useState } from 'react';
export default function PhoneInput({
  phone,
  setPhone
}: {
  phone: string;
  setPhone: Function;
}) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col w-full">
          <p className="text-[16px] text-black font-semibold">Phone</p>

          <div className="h-fit mt-2 w-full">
            <div className="flex items-center relative">
              <div
                data-dropdown-toggle="dropdown-phone"
                className="flex-shrink-0 cursor-pointer min-w-[105px] z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-1 border-[#ECEDF0] rounded-s-md hover:bg-gray-200  focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                onClick={() => setDropdown(!dropdown)}
              >
                <Flags refrence={phone} />
                {phone}{' '}
                <div
                  className={`${!dropdown ? 'rotate-[-90deg] mr-2.5' : ''} origin-top-right `}
                >
                  <svg
                    className={`w-2.5 h-2.5 ${dropdown ? 'ms-2.5' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </div>
              </div>
              <div
                id="dropdown-phone"
                className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 ${dropdown ? 'block' : 'hidden'} absolute top-12 left-0`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-phone-div"
                >
                  <li>
                    <div
                      className="inline-flex cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      onClick={() => {
                        setPhone('+1');
                        setDropdown(false);
                      }}
                    >
                      <span className="inline-flex items-center">
                        <Flags refrence="+1" />
                        Canada (+1)
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="inline-flex cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      onClick={() => {
                        setPhone('+44');
                        setDropdown(false);
                      }}
                    >
                      <span className="inline-flex items-center">
                        <Flags refrence="+44" />
                        United Kingdom (+44)
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="inline-flex w-full px-4 cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      onClick={() => {
                        setPhone('+61');
                        setDropdown(false);
                      }}
                    >
                      <span className="inline-flex items-center">
                        <Flags refrence="+61" />
                        Australia (+61)
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="inline-flex w-full cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      onClick={() => {
                        setPhone('+49');
                        setDropdown(false);
                      }}
                    >
                      <span className="inline-flex items-center">
                        <Flags refrence="+49" />
                        Germany (+49)
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="inline-flex w-full px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      onClick={() => {
                        setPhone('+33');
                        setDropdown(false);
                      }}
                    >
                      <span className="inline-flex items-center">
                        <Flags refrence="+33" />
                        France (+33)
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  className="block p-3 w-full z-20 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border-1 border-[#ECEDF0] focus:ring-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  onClick={() => setDropdown(false)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Flags = ({ refrence }: { refrence: string }) => {
  switch (refrence) {
    case '+1':
      return (
        <>
          <svg className="w-4 h-4 me-2" fill="none" viewBox="0 0 20 15">
            <rect width="20" height="15" fill="#fff" />
            <mask
              id="a"
              style={{ maskType: 'luminance' }}
              width="20"
              height="15"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <rect width="20" height="15" fill="#fff" />
            </mask>
            <g mask="url(#a)">
              <rect width="5" height="15" fill="#FF0000" />
              <rect x="15" width="5" height="15" fill="#FF0000" />
              <path
                d="M10 2 L11 6 L15 7 L11 8 L12 12 L10 9 L8 12 L9 8 L5 7 L9 6 L10 2 Z"
                fill="#FF0000"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_374_135180"
                width="20"
                height="15"
                x="0"
                y="0"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_374_135180"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_374_135180"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      );
    case '+44':
      return (
        <>
          <svg className="h-4 w-4 me-2" fill="none" viewBox="0 0 20 15">
            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
            <mask
              id="a"
              style={{ maskType: 'luminance' }}
              width="20"
              height="15"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
            </mask>
            <g mask="url(#a)">
              <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                clip-rule="evenodd"
              />
              <path
                stroke="#DB1F35"
                stroke-linecap="round"
                stroke-width=".667"
                d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
              />
              <path
                fill="#E6273E"
                fill-rule="evenodd"
                d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                clip-rule="evenodd"
              />
            </g>
          </svg>
        </>
      );
    case '+61':
      return (
        <>
          <svg
            className="h-4 w-4 me-2"
            fill="none"
            viewBox="0 0 20 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
            <mask
              id="a"
              style={{ maskType: 'luminance' }}
              width="20"
              height="15"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
            </mask>
            <g mask="url(#a)">
              <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
              <path
                fill="#fff"
                stroke="#fff"
                stroke-width=".667"
                d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
              />
              <path
                fill="url(#paint0_linear_374_135177)"
                fill-rule="evenodd"
                d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                clip-rule="evenodd"
              />
              <path
                fill="url(#paint1_linear_374_135177)"
                fill-rule="evenodd"
                d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                clip-rule="evenodd"
              />
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                clip-rule="evenodd"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_374_135177"
                x1="0"
                x2="0"
                y1=".5"
                y2="7.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#F0F0F0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_374_135177"
                x1="0"
                x2="0"
                y1=".5"
                y2="7.033"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF2E3B" />
                <stop offset="1" stop-color="#FC0D1B" />
              </linearGradient>
            </defs>
          </svg>
        </>
      );
    case '+49':
      return (
        <>
          <svg className="w-4 h-4 me-2" fill="none" viewBox="0 0 20 15">
            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
            <mask
              id="a"
              style={{ maskType: 'luminance' }}
              width="20"
              height="15"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
            </mask>
            <g mask="url(#a)">
              <path
                fill="#262626"
                fill-rule="evenodd"
                d="M0 5.167h19.6V.5H0v4.667z"
                clip-rule="evenodd"
              />
              <g filter="url(#filter0_d_374_135180)">
                <path
                  fill="#F01515"
                  fill-rule="evenodd"
                  d="M0 9.833h19.6V5.167H0v4.666z"
                  clip-rule="evenodd"
                />
              </g>
              <g filter="url(#filter1_d_374_135180)">
                <path
                  fill="#FFD521"
                  fill-rule="evenodd"
                  d="M0 14.5h19.6V9.833H0V14.5z"
                  clip-rule="evenodd"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_374_135180"
                width="19.6"
                height="4.667"
                x="0"
                y="5.167"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_374_135180"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_374_135180"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_374_135180"
                width="19.6"
                height="4.667"
                x="0"
                y="9.833"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_374_135180"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_374_135180"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      );
    case '+33':
      return (
        <>
          <svg className="w-4 h-4 me-2" fill="none" viewBox="0 0 20 15">
            <rect
              width="19.1"
              height="13.5"
              x=".25"
              y=".75"
              fill="#fff"
              stroke="#F5F5F5"
              stroke-width=".5"
              rx="1.75"
            />
            <mask
              id="a"
              style={{ maskType: 'luminance' }}
              width="20"
              height="15"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <rect
                width="19.1"
                height="13.5"
                x=".25"
                y=".75"
                fill="#fff"
                stroke="#fff"
                stroke-width=".5"
                rx="1.75"
              />
            </mask>
            <g mask="url(#a)">
              <path fill="#F44653" d="M13.067.5H19.6v14h-6.533z" />
              <path
                fill="#1035BB"
                fill-rule="evenodd"
                d="M0 14.5h6.533V.5H0v14z"
                clip-rule="evenodd"
              />
            </g>
          </svg>
        </>
      );
  }
};
