export const FeatureGrid = () => {
  const features = [
    { id: '01', title: 'Create', desc: 'Build quizzes with multiple question types including short answer, true/false, and multiple choice.' },
    { id: '02', title: 'Manage', desc: 'Organize and edit your quizzes effortlessly. View structure and track performance.' },
    { id: '03', title: 'Deploy', desc: 'Distribute quizzes instantly and monitor structure responses in real-time.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#E5E5E5]">
      {features.map((f) => (
        <div 
          key={f.id} 
          className="p-8 border-b md:border-b-0 md:border-r border-[#E5E5E5] last:border-r-0 hover:bg-black group transition-colors duration-300"
        >
          <span className="text-[10px] font-black text-gray-300 group-hover:text-gray-600 transition-colors">
            {f.id}
          </span>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mt-4 mb-3 text-black group-hover:text-white transition-colors">
            {f.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  );
};
