"use client"

import {useState} from "react"

function HomePage() {
  //worker name state, local host can be used or a backend
const [workerName,setWorkerName]  = useState({wN:"",name:["Worker 1","Worker 2","Worker 3","Worker 4","Worker 5","Worker 6","Worker 7","Worker 8"]})

const [weekDesign,rearrangeDesign] = useState([])


 // for hard coding name when available
  let n1 = workerName.name[0]
  let n2 = workerName.name[1]
  let n3 = workerName.name[2]
  let n4 = workerName.name[3]
  let n5 = workerName.name[4]
  let n6 = workerName.name[5]
  let n7 = workerName.name[6]
  let n8 = workerName.name[7]
  let workersNams = [n1,n2,n3,n4,n5,n6,n7,n8]
  
  //eight possible matrix combination to ensure equl schedule among staff in 8 weeks span
  let weekArrangements = [
                 [1,2,3,4,5,6,7,8],
                 [8,1,2,3,4,5,6,7],
                 [7,8,1,2,3,4,5,6],
                 [6,7,8,1,2,3,4,5],
                 [5,6,7,8,1,2,3,4],
                 [4,5,6,7,8,1,2,3],
                 [3,4,5,6,7,8,1,2],
                 [2,3,4,5,6,7,8,1],]

    /*   days.map((day)=>
        <td className="border px-4 pb-[1px]"><span><span className="text-[10px]">{getInitials(worker)}</span><span className="flex">{timing.map((time)=>(<span className="text-[9px] whitespace-nowrap bg-green-300 py-1 pr-1">{time}</span>))}</span></span></td>)
                */
  let design1 = (<span>1</span>)//Monday to sunday of this week
  let design2 = (<span>2</span>)
  let design3 = (<span>3</span>)
  let design4 = (<span>4</span>)
  let design5 = (<span>5</span>)
  let design6 = (<span>6</span>)
  let design7 = (<span>7</span>)
  let design8 = (<span>8</span>)
      // weekDesign = [8,1,2,3,4,5,6,7]
  let design =  [design1,design2,design3,design4,design5,design6,design7,design8,]
  let designArranged = []
  for(let i=0;i<design.length;i++){ 
    designArranged[i] = design[weekDesign[i]-1]
  }
  

  function thisDesign(weekNUM){
    let weekArrangement = weekDesign;
    weekArrangement = weekArrangements[weekNUM-1];
      rearrangeDesign(weekArrangement) }

let timing = ["07:00","07:30","08:00","8:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","22:30- Night Shit -07:30",]
let weeks = [1,2,3,4,5,6,7,8]
let workers = [1,2,3,4,5,6,7,8]
let days = ["Monday","Tuesday","Wesnesday","Thursday","Friday","Saturday","sunday"]
function getInitials(name) {
  return name?.split(' ').map(word => word.charAt(0)).join('');
}
  return (
    <div className="px-2 pt-3 sm:px-10 sm:pt-10">
        <div className="flex flex-wrap items-center text-center">
            <h1 className="text-4xl font-CD font-black mb-4">Workers  Schedule</h1>
            <div className="flex flex-col items-center lg:items-end  text-center">

              {/* Workers name */}
              <div className='flex mb-1 mr-4'>
              <form
          className=""
          onSubmit={(e) => {
            alert("Name updated");
            e.preventDefault();
            }}>
              <select
            className="w-1/4 sm:w-1/4 lg:w-1/5 px-1   pt-[9px] pb-[9px]  2xl:py-4 rounded-l-md hover:brightness-75 hover:shadow-2xl bg-[#004DB3] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold  cursor-pointer "
            value={workerName.worker}
            onChange={(e) => {
              setWorkerName((workerName) => ({ ...workerName, wN: e.target.value }));
            }}
          >
            <option selected> Select a Worker</option>
            {workers.map((worker) => (
                  <option value={worker} >
                   <span className=""> Worker {worker}</span>
                  </option>
                ))
              }
          </select>

          <input placeholder='James Bond'  onChange={(e) => {
              let magic = workerName.name //e.target.value
                  magic[workerName.wN]= e.target.value;
              setWorkerName((workerName) => ({ ...workerName, name: magic }))
            }} className='w-2/4 lg:3/5 px-1 sm:px-2 lg:px-3 py-2  2xl:py-4 bg-[#2A2A2B] text-[10px] sm:text-[12px] 2xl:text-[16px] text-white'/>
          <button className=" w-1/4 sm:w-1/4 lg:w-1/5 px-1 sm:px-2 lg:px-3 py-2  2xl:py-4 hover:brightness-75 hover:shadow-2xl bg-[#004DB3] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold rounded-r-md ">Submit</button>
          </form>

        </div>
              {/* Weeks buttons */}
              <div className="flex flex-wrap lg:space-x-2 sm:ml-5 mb-2 text-center">
                {
                  weeks.map((week)=>(
                    <button 
                    className="px-5 py-2.5 mx-1 lg:mx-0 rounded hover:bg-[#AAC4E6] active:bg-[#004DB3] hover:shadow-2xl bg-white focus:bg-[#004DB3] focus:text-[#AAC4E6]"
                    key={week} 
                    onClick={()=>thisDesign(week)}
                    >Week {week}</button> 
                  ))
                }
              </div>
            </div>
        </div>
        <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-black pb-[3px]">
        <table className="table-auto w-full border-collapse border-2 border-gray-800 ">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="px-4 py-2 text-left"></th>
                {days.map((day)=>(
                <th className="px-4 py-2 text-left">{day}</th>
                ))}
              </tr>    
            </thead>
            <tbody>
              {workersNams.map((worker)=>
            (<tr className="hover:bg-gray-100 border-2 border-gray-300">
                <td className="border px-4 py-1 whitespace-nowrap">{worker}</td>
                {designArranged[workersNams.indexOf(worker)]}
              </tr> )
              )}
            </tbody>
          </table>
        </div>
    </div>
  )
}
export default HomePage