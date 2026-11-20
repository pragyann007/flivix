import Image from "next/image";
import { TestComponent } from "@/components/test-component";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen py-12 px-4">
      <main className="flex flex-1 w-full max-w-xl flex-col items-center justify-center gap-8 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        <TestComponent />
      </main>
    </div>
  );
}
