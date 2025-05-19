import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-12 pb-20 sm:p-8">
      <header className="flex flex-col h-96 gap-[32px] items-center sm:items-start">
        <Image
          src="/pictures/banner.png"
          alt="Banner"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </header>
      <main className="flex flex-col gap-[32px] items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1550}
          height={100}
          className="dark:invert w-[150px] h-[150px] object-cover rounded-full"
          priority
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Business Name</h1>
          <p className="text-gray-500">Short Business Description</p>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="flex flex-row gap-2 list-style-type-none">  
            <li className="text-gray-500">
              <Link href="/">
                <Image
                  className="w-6 h-6 dark:invert"
                  src="/icons/smartphone-device.svg"
                  alt="smartphone icon"
                  width={50}
                  height={50}
                />
              </Link>
            </li>
            <li className="text-gray-500">
              <Link href="/">
                <Image
                  className="w-6 h-6 dark:invert"
                  src="/icons/mail-solid.svg"
                  alt="email icon"
                  width={50}
                  height={50}
                />
              </Link>
            </li>
            <li className="text-gray-500">
              <Link href="/">
                <Image
                  className="w-6 h-6 dark:invert"
                  src="/icons/map-pin.svg"
                  alt="map icon"
                  width={50}
                  height={50}
                />
              </Link>
            </li>
            <li className="text-gray-500">
              <Link href="/">
                <Image
                  className="w-6 h-6 dark:invert"
                  src="/icons/whatsapp-solid.svg"
                  alt="whatsapp icon"
                  width={50}
                  height={50}
                />
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
