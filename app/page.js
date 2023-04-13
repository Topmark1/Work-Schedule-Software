"use client"

function HomePage() {
  let n1 = "james Robert"
  let n2
  let n3
  let n4 
  let n5
  let n6
  let n7
  let n8
  
  function workSchedule(w1="Worker 1",w2="Worker 2",w3="Worker 3",w4="Worker 4",w5="Worker 5",w6="Worker 6",w7="Worker 7",w8="Worker 8"){
    schedule  = {
      w1:{name:w1,sche:[]},
      w2:{name:w2,sche:[]},
    }

    return schedule
  }
console.log(workSchedule(n1,n2,n3,n4,n5,n6,n7,n8))









let hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
let name = "Worker 1"
function getInitials(name) {
  return name.split(' ').map(word => word.charAt(0)).join('');
}
  return (
    <div className="p-10">
            <h1 className="text-4xl font-CD font-black mb-3">Workers  Schedule</h1>
            <div className="mr-10">
            <table className="table-auto w-full border-collapse border-2 border-gray-800 ">
                <thead>
                  <tr className="bg-gray-200 ">
                    <th className="px-4 py-2 text-left"></th>
                    <th className="px-4 py-2 text-left">Monday</th>
                    <th className="px-4 py-2 text-left">Tuesday</th>
                    <th className="px-4 py-2 text-left">Wesnesday</th>
                    <th className="px-4 py-2 text-left">Thursday</th>
                    <th className="px-4 py-2 text-left">Friday</th>
                    <th className="px-4 py-2 text-left">Saturday</th>
                    <th className="px-4 py-2 text-left">Sunday</th>
                  </tr>    
                </thead>
                <tbody>
                <tr className="hover:bg-gray-100 border-2 border-gray-300">
                    <td className="border px-4 py-1 whitespace-nowrap">{name}</td>
                    <td className="border px-4 py-1"><span><span className="text-[8px]">{getInitials(name)}</span><span className="flex">{hours.map((hour)=>(<span className="text-xs bg-green-300 py-1 pr-2">{hour}</span>))}</span></span></td>
                    <td className="border px-4 py-1"><span><span className="text-[8px] ">{getInitials(name)}</span><span className="flex">{hours.map((hour)=>(<span className="text-xs bg-green-300 py-1 pr-2">{hour}</span>))}</span></span></td> 
                  </tr>
                  <tr className="hover:bg-gray-100 border-2 border-gray-300">
                    <td className="border px-4 py-1 whitespace-nowrap">{name}</td>
                    <td className="border px-4 py-1"><span><span className="text-[8px]">{getInitials(name)}</span><span className="flex">{hours.map((hour)=>(<span className="text-xs bg-green-300 py-1 pr-2">{hour}</span>))}</span></span></td>
                    <td className="border px-4 py-1"><span><span className="text-[8px] ">{getInitials(name)}</span><span className="flex">{hours.map((hour)=>(<span className="text-xs bg-green-300 py-1 pr-2">{hour}</span>))}</span></span></td> 
                  </tr>
                  <tr className="hover:bg-gray-100 border-2 border-gray-300">
                    <td className="border px-4 py-1 whitespace-nowrap">{name}</td>
                    <td className="border px-4 py-1"><span><span className="text-[8px]">{getInitials(name)}</span><span className="flex">{hours.map((hour)=>(<span className="text-xs bg-green-300 py-1 pr-2">{hour}</span>))}</span></span></td>
                    <td className="border px-4 py-1"><span><span className="text-[8px] ">{getInitials(name)}</span><span className="flex">{hours.map((hour)=>(<span className="text-xs bg-green-300 py-1 pr-2">{hour}</span>))}</span></span></td> 
                  </tr>
                  
                 
                </tbody>
              </table>
            </div>
    </div>
  )
}
export default HomePage