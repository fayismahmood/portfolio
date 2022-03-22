// import { useEffect, useState } from "react";
// import { server } from "../../configs";

// export default function port() {
//   useEffect(async () => {
//     let res = await fetch(`${server}/portf.json`);
//     let _lt = await res.json();
//     setData(_lt);
//   }, [0]);
//   const [DiaOpen, setDiaOpen] = useState(false);
//   const [Data, setData] = useState(null);

//   function Dia() {
//     let data = {};
//     let str = [
//       { type: "text", key: "head" },
//       { type: "text", key: "pic" },
//       { type: "text", key: "disc" },
//       { type: "text", key: "tech" },
//       { type: "text", key: "type" },
//     ];
//     return (
//       <div>
//         <div>
//           {str.map((e) => (
//             <input
//               type={e.type}
//               key={e.key}
//               className="border-2"
//               onInput={({ target }) => {
//                 data[e.key] = target.value;
//               }}
//             />
//           ))}
//         </div>
//         <div>
//           <button
//             onClick={() => {
//               setData(e=>({...e,data:[...e.data,data]}))
//             }}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div className="act m-10">
//         <button onClick={()=>{
//             setDiaOpen(true)
//         }} className="bg-vividburgundy px-3 text-white">Add</button>
//       </div>
//       {Data ? (
//         <div>
//           <table className="table-auto m-10 border-collapse w-full text-sm">
//             <thead>
//               <tr>
//                 <th>head</th> <th>pic</th> <th>disc</th> <th>tech</th>
//                 <th>type</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Data.data.map((e) => (
//                 <tr className="border-2 ">
//                   <td>{e.head}</td> <td>{e.pic}</td> <td>{e.disc}</td>{" "}
//                   <td>{e.tech}</td>
//                   <td>{e.type}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div>Loading..</div>
//       )}
//       {DiaOpen && <Dia />}
//     </div>
//   );
// }




export default function port() {
  return (
    <div>port</div>
  )
}
