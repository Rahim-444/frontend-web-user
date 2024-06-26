'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const content = [
  {
    key: 'ACCOUNT',
    items: [
      'Profile',
      'Company Details',
      'Password',
      'Linked Accounts',
      'Referral Program',
      'Notifications',
      'Support Messaging'
    ]
  }
  //TODO: Uncomment when the feature is ready
  // {
  //   key: 'DATA',
  //   items: [
  //     'Agency Markup',
  //     'Client Messaging',
  //     'Data Import',
  //     'Custom Metrics'
  //   ]
  // },
  // {
  //   key: 'WHITE LABEL',
  //   items: ['Logos', 'Colors', 'Login / Domain']
  // }
];

export default function Sidebar() {
  const [selected, setSelected] = useState<string>(
    usePathname()
      .replace('/settings/', '')
      .replaceAll('-', ' ')
      // capitalize first letter and the letter after space
      .replace(/(^\w|\s\w)/g, (letter) => letter.toUpperCase())
  );
  return (
    <div className="ml-5 mt-10 min-w-[161px]">
      {content.map((item) => {
        return (
          <div key={item.key}>
            <p className="text-[#484847] text-[15px] font-semibold my-4">
              {item.key}
            </p>
            <ul>
              {item.items.map((subItem) => {
                return (
                  <li key={subItem} onClick={() => setSelected(subItem)}>
                    <Link
                      href={`/settings/${subItem.toLowerCase().replace(' ', '-')}`}
                      className={`${selected === subItem ? 'border-l-orange-600' : ''} cursor-pointer border-l-3 text-[#474746] border-transparent hover:border-l-orange-600 my-2 px-2 h-full w-full block`}
                    >
                      {subItem}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
