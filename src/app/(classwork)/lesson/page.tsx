export default function Home() {
  return (
    <div className="min-h-screen py-5">
      <div className="mb-4">
        <div className="grid grid-cols-[100px,2fr,2fr,4fr] gap-2 text-center">
          <div className="bg-red-500 w-[10vh] h-[10vh]">box 1</div>
          <div className="bg-green-500 w-[20vh] h-[20vh]">box 2</div>
          <div className="bg-blue-500 w-[30vh] h-[30vh]">box 3</div>
          <div className="bg-black text-white w-[40vh] h-[40vh]">box 4</div>
          <div className="bg-orange-500 w-[50vh] h-[50vh]">box 5</div>
        </div>

        <div className="relative h-[400px] w-[400px] bg-stone-900">
          <div className="absolute bottom-0 right-0 bg-red-400 h-[200px] w-[150px] text-center">
            Right
          </div>
          <div className="absolute left-0 bottom-0 bg-blue-400 h-[200px] w-[150px] text-center">
            Left
          </div>
        </div>
        <div className="relative h-64 w-64 bg-gray-200">
          <div className="absolute top-0 left-0 bg-red-500 p-2">Top Left</div>
          <div className="absolute top-0 right-0 bg-blue-500 p-2">
            Top Right
          </div>
          <div className="absolute bottom-10 left-0 bg-green-500 p-2">
            Bottom Left
          </div>
          <div className="absolute bottom-10 right-0 bg-yellow-500 p-2">
            Bottom Right
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-purple-500 p-2 text-center">
            Full Width Bottom
          </div>
        </div>
      </div>
    </div>
  );
}
