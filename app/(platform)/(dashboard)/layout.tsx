import { Navbar } from "./_components/navbar";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard users",
};
export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full ">
      <Navbar />
      {children}
    </div>
  );
}
