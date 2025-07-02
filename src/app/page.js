import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-10 md:py-20">
      <h1 className="text-4xl font-bold text-center text-neutral-800">
        Welcome to Dealer Profile
      </h1>
      <p className="text-lg text-center text-neutral-600">
        A simple dealer profile page with a sleek shimmer loading effect
      </p>
      <Link
        href="/dealer/profile/683fd775663f91c17ef48811"
        className="px-4 py-2 mt-10 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 w-fit mx-auto"
      >
        View Profile
      </Link>
    </div>
  );
}
