import React from 'react';
import Link from 'next/link';

const articles = [
  { title: 'Article-1', image: '/artical7.png', path: '/finalartical/artical1' },
  { title: 'Article-2', image: '/artical2.png', path: '/finalartical/artical1' },
  { title: 'Article-3', image: '/artical3.png', path: '/finalartical/artical1' },
  { title: 'Article-4', image: '/artical4.png', path: '/finalartical/artical1' },
  { title: 'Article-5', image: '/artical5.png', path: '/finalartical/artical1' },
  { title: 'Article-6', image: '/artical6.png', path: '/finalartical/artical1' },
];

const Artical = () => {
  return (
    <div className="py-6 bg-[#F8F9FE] flex flex-col items-center">
      <h2 className="text-[34px] font-bold text-center text-[#004979] mb-6">
        Articles by Dr. Shazia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Link href={article.path} key={index}>
            <div
              className="relative rounded overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
              style={{ width: '290px', height: '220px' }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">
                  {article.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artical;
