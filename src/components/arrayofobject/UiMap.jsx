import React from "react";

const UiMap = () => {
  let data = [
    {
      _id: 1,
      tittle: "Zero-risk",
      img: "https://res.cloudinary.com/du9rsmpex/image/upload/v1698933810/profitcast/Credit-Card-01_qlkg0p.webp",
      paragraph:
        "Pay 100% upfront and put us to the test! If within 20 days we don't hit the right note, claim a 100% refund. No ifs, no buts, just your trust in our commitment.",
    },
    {
      _id: 2,
      tittle: "Tailored ad strategy",
      img: "https://res.cloudinary.com/du9rsmpex/image/upload/v1698933810/profitcast/Credit-Card-01_qlkg0p.webp",
      paragraph:
        "Your business isn't cookie-cutter, and neither are our strategies. At Profitcast, it's personalized perfection, always!",
    },
    {
      _id: 3,
      tittle: "Maximized ROI",
      img: "https://res.cloudinary.com/du9rsmpex/image/upload/v1698933818/profitcast/Puzzle-01_xthm4a.webp",
      paragraph:
        "Every penny you invest is optimized with precision, ensuring maximum returns with Profitcast's expertise.",
    },
    {
      _id: 4,
      tittle: "Feedback focused",
      img: "https://res.cloudinary.com/du9rsmpex/image/upload/v1698933828/profitcast/Work-Process-01_npv7vq.webp",
      paragraph:
        "We listen, adapt, and evolve, always keeping your feedback at the forefront. With Profitcast, it's a collaborative crescendo!",
    },
  ];
  return (
    <div className="bg-gray-200 border shadow-2xl rounded-3x lp-6 text-center m-10 p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Why work with Profitcast?💡
      </h1>
      <p className="text-gray-700">Epic results, zero fluff.</p>
      <div className="container mx-auto p-4 text-left mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {data.map(({ _id, tittle, img, paragraph }, index) => (
            <div
              key={_id}
              className="bg-white rounded flex p-6"
            >
              <img className="w-20 h-20" src={img} />
              <div>
                <h1 className="text-2xl text-left">{tittle}</h1>
                <h1>{paragraph}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-xl bg-orange-400 px-4 py-2 rounded text-white">Contact Us</button>
      </div>
    </div>
  );
};

export default UiMap;
