import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Image alt="" src={logo} />
      <Header />
      Tech House
    </div>
  );
}
