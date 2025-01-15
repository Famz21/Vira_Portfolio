import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      {/* Use flexbox to stack cards vertically */}
      <div className="w-full mt-12 flex flex-col gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
              // Reduce opacity for past experiences
              opacity: card.company === "DataU Academy" ? 0.8 : 1,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={`${card.company} logo`}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-gray-300 mt-3 font-semibold">
                  {card.company}
                </p>
                <p className="text-start text-gray-300 mt-2 font-semibold">
                  {card.duration}
                  {/* Add a label for past experiences */}
                  {card.company === "DataU Academy" && (
                    <span className="ml-2 text-sm text-gray-400"></span>
                  )}
                </p>
                <p className="text-start text-gray-300 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;