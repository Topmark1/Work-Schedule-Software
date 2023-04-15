"use client"

import {useState} from "react"

function HomePage() {
  //worker name state, local host can be used or a backend
const [workerName,setWorkerName]  = useState({wN:"",name:["Worker 1","Worker 2","Worker 3","Worker 4","Worker 5","Worker 6","Worker 7","Worker 8"]})

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
  let week1 = [1,2,3,4,5,6,7,8]
  let week2 = [8,1,2,3,4,5,6,7]
  let week3 = [7,8,1,2,3,4,5,6]
  let week4 = [6,7,8,1,2,3,4,5]
  let week5 = [5,6,7,8,1,2,3,4]
  let week6 = [4,5,6,7,8,1,2,3]
  let week7 = [3,4,5,6,7,8,1,2]
  let week8 = [2,3,4,5,6,7,8,1]
  

  function workSchedule(w1,w2,w3,w4,w5,w6,w7,w8,week){
      week = week1 //depending on param supply at wee button click so should be declared inside the button oitside this function      
      let schedule  = {
      w1:{name:w1,sche:[]},
      w2:{name:w2,sche:[]},
      w3:{name:w3,sche:[]},
      w4:{name:w4,sche:[]},
      w5:{name:w5,sche:[]},
      w6:{name:w6,sche:[]},
      w7:{name:w7,sche:[]},
      w8:{name:w8,sche:[]},
    }




    return schedule
  }
console.log(workSchedule(n1,n2,n3,n4,n5,n6,n7,n8))



let timing = ["07:00","07:30","08:00","8:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","22:30- Night Shit -07:30",]
let weeks = [1,2,3,4,5,6,7,8]
let workers = [1,2,3,4,5,6,7,8]
let days = ["Monday","Tuesday","Wesnesday","Thursday","Friday","Saturday","sunday"]
function getInitials(name) {
  return name?.split(' ').map(word => word.charAt(0)).join('');
}
  return (
    <div className="px-2 pt-3 sm:px-10 sm:pt-10">
        <div className="flex flex-wrap items-center ">
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
              <div className="flex flex-wrap lg:space-x-2 ml-5 mb-2 text-center">
                {
                  weeks.map((week)=>(
                    <button className="px-5 py-2.5 mx-1 lg:mx-0 rounded hover:bg-[#AAC4E6] active:bg-[#4786d9] hover:shadow-2xl bg-white focus:bg-[#4786d9]">Week {week}</button> 
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
                { days.map((day)=>
                <td className="border px-4 pb-[1px]"><span><span className="text-[10px]">{getInitials(worker)}</span><span className="flex">{timing.map((time)=>(<span className="text-[9px] whitespace-nowrap bg-green-300 py-1 pr-1">{time}</span>))}</span></span></td>)
                }
              </tr> )
              )}
            </tbody>
          </table>
        </div>
    </div>
  )
}
export default HomePage