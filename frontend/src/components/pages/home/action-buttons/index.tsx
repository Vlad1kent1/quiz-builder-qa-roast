import Link from 'next/link';

export const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-0 justify-center items-center py-8">
      <Link
        href="/quizzes"
        className="w-full sm:w-64 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#222] transition-all text-center active:scale-[0.98]"
      >
        Explore Library
      </Link>
      <Link
        href="/create"
        className="w-full sm:w-64 py-5 border-y sm:border-y-0 sm:border-r border-black text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all text-center active:scale-[0.98]"
      >
        Initialize Builder
      </Link>
    </div>
  );
};
