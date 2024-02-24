import FiqihRamadhan from "../components/FiqihRamadhan";

export default function page() {
  return (
    <main className="w-screen h-screen bg-[url('/images/bg.jpeg')] bg-cover">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-90">
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full font-serif">
        <FiqihRamadhan />
      </div>
    </main>
  )
}
