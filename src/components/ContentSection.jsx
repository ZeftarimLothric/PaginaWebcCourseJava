import React from "react";

export function ContentSection({
  title,
  content,
  subtitles,
  leftImage,
  rightImage,
}) {
  return (
    <section className="bg-[#ffddc9] rounded-lg p-6 mb-8">
      <h2 className="text-[30px] font-bold text-gray-900">{title}</h2>
      <div className="flex items-center space-x-4">
        {leftImage && (
          <div className="flex-shrink-0">
            <img
              src={leftImage}
              alt=""
              className="w-24 h-24 object-cover rounded"
            />
          </div>
        )}
        <div className="flex-grow">
          <div className="text-gray-900">{content}</div>{" "}
        </div>
        <div className="flex-grow">
          <div className="text-gray-900 font-bold">{subtitles}</div>{" "}
        </div>
        {rightImage && (
          <div className="flex-shrink-0">
            <img
              src={rightImage}
              alt=""
              className="w-24 h-24 object-cover rounded"
            />
          </div>
        )}
      </div>
    </section>
  );
}
