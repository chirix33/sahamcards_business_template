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
        <div className="cards-container w-3/4 lg:w-2/4 flex flex-col gap-4 mt-12">
          <div className="w-full flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
            <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
              <Image
                className="w-6 h-6 dark:invert"
                src="/icons/whatsapp-solid.svg"
                alt="whatsapp icon"
                width={50}
                height={50}
              />
            </span>
            <div className="w-full">
              <p className="text-gray-700 text-xl dark:text-gray-400 text-center">
                WhatsApp
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
            <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
              <Image
                className="w-6 h-6 dark:invert"
                src="/icons/snapchat-solid.svg"
                alt="snapchat icon"
                width={50}
                height={50}
              />
            </span>
            <div className="w-full">
              <p className="text-gray-700 text-xl dark:text-gray-400 text-center">
                Snapchat
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
            <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
              <Image
                className="w-6 h-6 dark:invert"
                src="/icons/google-circle.svg"
                alt="google icon"
                width={50}
                height={50}
              />
            </span>
            <div className="w-full">
              <p className="text-gray-700 text-xl dark:text-gray-400 text-center">
                Google
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
            <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
              <Image
                className="w-6 h-6 dark:invert"
                src="/icons/instagram.svg"
                alt="instagram icon"
                width={50}
                height={50}
              />
            </span>
            <div className="w-full">
              <p className="text-gray-700 text-xl dark:text-gray-400 text-center">
                Instagram
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
