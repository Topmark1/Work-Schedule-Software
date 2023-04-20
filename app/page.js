"use client"

import {useState} from "react"
import useLocalStorage from 'use-local-storage'
import Day from "../components/Day.js"
import Shift from "../components/Shift.js"

function HomePage() {
  //worker name state, local host can be used or a backend//useLocalStorage from 'use-local-storage
const [workerName,setWorkerName]  = useLocalStorage('workers',{wN:"",name:["Worker 1","Worker 2","Worker 3","Worker 4","Worker 5","Worker 6","Worker 7","Worker 8"]})
const [weekDesign,rearrangeDesign] = useState([1,2,3,4,5,6,7,8])
const [weekSelected,selectWeek] = useState([true,false,false,false,false,false,false,false])


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

        // fragment declaration
        let mt = '05:00- Morning -11:30'
        let at = '10:30- Afternoon -17:00'
        let aet = '17:00- Evening -23:00'
        let et = '17:00- Evening -23:30'
        let nt = '23:00- Night -05:30'
        let ca = 'bg-green-500'
        let cs = 'bg-gray-400'
        let f = 'font-normal'

        //all possible arrangement code
        let fD = (<span className='text-[9px] font-normal whitespace-nowrap py-1 tracking-[20px] pl-28'>Free Day</span> )
        let m = <Shift t={mt} f={f}/> 
        let a = <Shift t={at} f={f}/> 
        let e = <Shift t={et} f={f}/> 
        let n = <Shift t={nt} f={f}/>
        let na =  <Shift t={nt} c={ca} />
        let AEb33 =(<><Shift t={at} c={ca} b={'14:00-B-14:30'}/><Shift t={aet} c={ca} b={'20:00-B-20:30'}/></>)
        let MAb33  =(<><Shift t={mt} c={ca} b={'08:30-B-09:00'}/><Shift t={at} c={ca} b={'14:30-B-15:00'}/></>)
        let Mb40 = (<Shift t={mt} c={ca} b={'09:00-B-09:30'}/>)
        let MAb40  =(<><Shift t={mt} c={ca} b={'09:00-B-09:30'}/><Shift t={at} c={ca} b={'15:00-B-15:30'}/></>)
        let MAb60  =(<><Shift t={mt} c={ca} b={'11:00-B-11:30'}/><Shift t={at} c={ca} b={'14:30-B-15:00'}/></>)
        let sN =(<><Shift t={et} c={cs}/><Shift t={nt} c={ca}/></>)
        let Eb33s =(<><Shift t={et} c={ca} b={'20:30-B-21:00'}/><Shift t={nt} c={cs}/></>)
        let sm = (<Shift t={mt} c={cs}/>)
        // week arrangement array containing 7 days
        let weekArrangement1 = [[m,AEb33,n],[m,a,sN],fD,[m,AEb33,n],[m,a,sN],fD,fD]
        let weekArrangement2 = [[MAb33,e,n],[m,a,Eb33s],fD,[MAb33,e,n],[m,a,Eb33s],fD,fD]
        let weekArrangement3 = [[m,a,sN],fD,[m,AEb33,n],[m,a,sN],fD,fD,[sm,AEb33,n]]
        let weekArrangement4 = [[m,a,Eb33s],fD,[MAb33,e,n],[m,a,Eb33s],fD,fD,[MAb60,e,n]]
        let weekArrangement5 = [fD,[m,AEb33,n],[m,a,sN],fD,fD,[sm,AEb33,n],[m,a,sN]]
        let weekArrangement6 = [fD,[MAb33,e,n],[m,a,Eb33s],fD,fD,[MAb60,e,n],[m,a,Eb33s]]
        let weekArrangement7 = [[MAb40,e,n],[Mb40,a,e,n],fD,fD,[sm,AEb33,n],[m,a,sN],fD]
        let weekArrangement8 = [fD,fD,[MAb40,e,n],[Mb40,a,e,n],[MAb60,e,n],[m,a,Eb33s],fD]

  let design1 = (<>{weekArrangement1.map((day)=>
      <Day worker={workersNams[weekDesign.indexOf(1)]} dayArrangment={day}/>
    )}</>)//Monday to sunday of this week

  let design2 = (<>{weekArrangement2.map((day)=>
    <Day worker={workersNams[weekDesign.indexOf(2)]} dayArrangment={day}/>
  )}</>)//Monday to sunday of this week
    
  let design3 = (<>{weekArrangement3.map((day)=>
      <Day worker={workersNams[weekDesign.indexOf(3)]} dayArrangment={day}/>
    )}</>)//Monday to sunday of this week

  let design4 = (<>{weekArrangement4.map((day)=>
      <Day worker={workersNams[weekDesign.indexOf(4)]} dayArrangment={day}/>
    )}</>)//Monday to sunday of this week

  let design5 = (<>{weekArrangement5.map((day)=>
      <Day worker={workersNams[weekDesign.indexOf(5)]} dayArrangment={day}/>
    )}</>)//Monday to sunday of this week

  let design6 = (<>{weekArrangement6.map((day)=>
      <Day worker={workersNams[weekDesign.indexOf(6)]} dayArrangment={day}/>
    )}</>)//Monday to sunday of this week

  let design7 = (<>{weekArrangement7.map((day)=>
      <Day worker={workersNams[weekDesign.indexOf(7)]} dayArrangment={day}/>
    )}</>)//Monday to sunday of this week

  let design8 = (<>{weekArrangement8.map((day)=>
      <Day worker={workersNams[weekDesign.indexOf(8)]} dayArrangment={day}/>
    )}</>)//Monday to sunday of this week
      // weekDesign = [8,1,2,3,4,5,6,7]
  let design =  [design1,design2,design3,design4,design5,design6,design7,design8,]
  let designArranged = []
  for(let i=0;i<design.length;i++){ 
    designArranged[i] = design[weekDesign[i]-1]
  }
  

  function thisDesign(weekNUM){
    let weekArrangement = weekDesign;
    weekArrangement = weekArrangements[weekNUM-1];
      rearrangeDesign(weekArrangement);
      let select = weekSelected
      select.fill(false)
      select[weekNUM-1] = !select[weekNUM-1]
      selectWeek(select)}

let weeks = [1,2,3,4,5,6,7,8]
let workers = [1,2,3,4,5,6,7,8]
let days = ["Monday","Tuesday","Wesnesday","Thursday","Friday","Saturday","sunday"]
 
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
            defaultValue={'D'}
            onChange={(e) => {
              setWorkerName((workerName) => ({ ...workerName, wN: (e.target.value-1) }));
            }}
          >
            <option value={'D'} disabled> Select a Worker</option>
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
                    className={`px-5 py-2.5 mx-1 lg:mx-0 rounded hover:bg-[#004DB3] active:bg-[#004DB3] hover:shadow-2xl bg-white ${weekSelected[week-1]?'bg-[#004DB3] text-white':''}`}
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
            (<tr className="hover:bg-gray-100 border-2 border-gray-300 ">
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