export const metadata = {
  title: 'Settings | Mitech Recruitment'
};

import Sidebar from '@/components/ui/Sidebar';

export default function SettingsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#EBEDF0] h-full rounded-xl">
      <Sidebar />
      {children}
    </div>
  );
}
