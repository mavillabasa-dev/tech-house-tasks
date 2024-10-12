import { Header } from "@/components/header";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="p-5">
        {children}
      </main>
    </>
  );
}
