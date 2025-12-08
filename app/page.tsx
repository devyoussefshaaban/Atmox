import Image from "next/image";

const Home = () => {
  return (
    <main className=" mt-16">
      <h1 className="font-bricolage font-bolder text-center text-5xl mb-12">How is the sky looking today?</h1>
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center gap-2 wrap mx-auto w-full">
          <div className="w-full rounded-lg border-none bg-gray-800 text-md  px-6 py-3 flex items-center">
            <Image width={12} height={15} src="/images/icon-search.svg" alt="Search Icon" className="mr-2" />
            <input type="text" className="w-full border-none bg-gray-800 text-md outline-none"
              placeholder="Search for a place ..." />
          </div>
          <div>
            <button className="rounded-lg bg-blue-500 px-8 py-3 font-semibold cursor-pointer text-white">Search</button>
          </div>
        </div>
      </div>
    </main >
  );
};

export default Home;
