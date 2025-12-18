

"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  {
    name: "Total",
    count: 100,
    fill: "white", // أصفر فاتح
  },
  {
    name: "Girls",
    count: 47,
    fill: "#FAE27C", // أصفر فاتح
  },
  {
    name: "Boys",
    count: 53,
    fill: "#83A6ED", // أزرق سماوي
  },
];

function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="options" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className=" relative w-full h-64">
        {" "}
        {/* ارتفاع ثابت للرسم */}
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
            startAngle={180}
            endAngle={-180}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise
              dataKey="count"
            />
            {/* <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        />
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center gap-16 mt-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 bg-lamasky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-400">Boys (53%)</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 bg-lamayellow rounded-full" />
          <h1 className="font-bold">1,089</h1>
          <h2 className="text-xs text-gray-400">Girls (47%)</h2>
        </div>
      </div>
    </div>
  );
}

export default CountChart;
