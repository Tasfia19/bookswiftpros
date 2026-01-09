import React from 'react';

const Feedback = () => {
  const testimonials = [
    {
      name: 'CEO, E-Commerce Brand, USA',
      date: '2023-08-15',
      text: 'Within two months, they cleared up three years of backlog and set us up with real-time dashboards. I can finally see my cash flow and plan ahead.',
      avatar: 'https://i.pravatar.cc/48?img=12',
      likes: 12,
      dislikes: 0,
    },
    {
      name: 'SaaS Founder, Canada',
      date: '2023-09-22',
      text: 'Their CFO service helped us prepare investor-ready financial models that directly led to closing our seed funding round.',
      avatar: 'https://i.pravatar.cc/48?img=32',
      likes: 12,
      dislikes: 0,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {/* Heading */}
      <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900">
        FeedBack from Our Clients
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-2xl"
          >
            {/* Header */}
            <div className="mb-3 flex items-center gap-3">
              <img
                src={item.avatar}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="mb-3 flex text-base text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Content */}
            <p className="mb-5 text-sm leading-relaxed text-gray-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
