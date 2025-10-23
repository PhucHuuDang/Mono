import { EtheralShadow } from "@/components/ui/etheral-shadow";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen w-full">
      <EtheralShadow>
        <h1 className="md:text-7xl text-6xl lg:text-8xl font-bold text-center text-foreground relative z-20 dark:text-white">
          <Image
            src="/logo.png"
            alt="logos-devs"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
          Devs
        </h1>
      </EtheralShadow>
    </div>
  );
}
