import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Business Name</h1>
          <p className="text-gray-500">Short Business Description</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Contact Shortcuts</h2>
          <ul className="flex flex-row gap-2 list-style-type-none">  
            <li className="text-gray-500">Product 1</li>
            <li className="text-gray-500">Product 2</li>
            <li className="text-gray-500">Product 3</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
