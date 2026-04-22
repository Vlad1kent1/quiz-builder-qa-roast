import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <Link
              href="/"
              className="text-lg font-bold tracking-tighter uppercase"
            >
              Quiz Builder
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/quizzes"
              className="text-sm font-medium text-black/60 hover:text-black transition-colors"
            >
              Quizzes
            </Link>
            <Link
              href="/create"
              className="px-4 py-2 text-sm font-bold uppercase tracking-widest bg-black text-white hover:bg-gray-900 transition-all"
            >
              Create
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };