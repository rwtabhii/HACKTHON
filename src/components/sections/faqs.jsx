
const FAQS = () => {
  const faqData = [
    { id: "01", q: "Who can participate in the hackathon?", a: "Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution." },
    { id: "02", q: "What should be the ideal team size?", a: "Each team must consist of 3 to 4 members, possibly from different colleges/universities." },
    { id: "03", q: "What is the cost of participating?", a: "Participation is entirely free. No registration or submission fee is required." },
    { id: "04", q: "Can a recent graduate participate?", a: "Only current students from the 2024-25 academic year are eligible." }
  ];

  return (
    <section className="mt-30 px-6 relative z-10 bg-transparent" >
      <h2 className="text-center text-white tracking-[0.2em] uppercase mb-25 text-xl ">
        FREQUENTLY ASKED QUESTION
      </h2>
      
      <div className="max-w-6xl mx-auto flex flex-col border-t border-white/41 mt-10">
        {faqData.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-start gap-8 py-10 border-b border-white/41">
            <div className="bg-white/5 border border-white/10 text-white font-mono px-3 py-1 rounded shrink-0">
              {item.id}
            </div>
            <div className="flex-1">
              <h4 className={`text-lg ${item.id === '02' || item.id === '04' ? 'text-[#7b61ff]' : 'text-white'}`}>
                {item.q}
              </h4>
            </div>
            <div className="flex-1">
              <p className="text-white/60 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;