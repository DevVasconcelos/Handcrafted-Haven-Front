import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center no-underline">
      <Image 
        src="/logo_2.png" 
        alt="Handcrafted Haven" 
        width={180} 
        height={42}
        className="h-auto w-auto max-h-10 transition-transform hover:scale-105"
        priority
      />
    </Link>
  );
}
