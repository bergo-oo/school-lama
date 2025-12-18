"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20} //   margin={{
          //     top: 5,
          //     right: 0,
          //     left: 0,
          //     bottom: 5,
          //   }}>
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;


// "use client";
// import Image from "next/image";
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Rectangle,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Sunday", present: 90, absent: 60 },
//   { name: "Monday", present: 115, absent: 55 },
//   { name: "Tuesday", present: 130, absent: 90 },
//   { name: "Wednesday", present: 110, absent: 70 },
//   { name: "Thursday", present: 70, absent: 45 },
//   { name: "Friday", present: 100, absent: 30 },
//   { name: "Saturday", present: 125, absent: 55 },
// ];

// function AttendanceChart() {
//   return (
//     <div className="bg-white rounded-lg p-4 h-full">
//       <div className="">
//         <h1>Attendance</h1>
//         <Image src="/moreDark.png" alt="" height={20} width={20} />
//       </div>
//       <div className="w-full h-[70vh] max-w-[700px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             data={data}
//             width={500}
//             height={500}
//             barSize={20}
//             //   margin={{
//             //     top: 5,
//             //     right: 0,
//             //     left: 0,
//             //     bottom: 5,
//             //   }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" axisLine={false} />
//             <YAxis axisLine={false} />
//             <Tooltip />
//             <Legend
//               align="left"
//               verticalAlign="top"
//               wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
//             />
//             <Bar
//               dataKey="present"
//               fill="#FAE27C"
//               activeBar={<Rectangle fill="#FAE27C" stroke="gray" />}
//               legendType="circle"
//               radius={[10, 10, 0, 0]}
//             />
//             <Bar
//               dataKey="absent"
//               fill="#83A6ED"
//               activeBar={<Rectangle fill="#83A6ED" stroke="gray" />}
//               legendType="circle"
//               radius={[10, 10, 0, 0]}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default AttendanceChart;
