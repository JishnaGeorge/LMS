'use client'
import Calendar from "@/components/Calendar";
import LeaveInfo from "@/components/LeaveInfo";
import WorkAllocation from "@/components/dashboard/work-allocation";
import AddTask from "@/components/tasks/AddTask";
import { EventContextProvider } from "@/store/eventContext";
import { useEffect, useState } from "react";
import axios from "axios";
import IAllocation from "@/models/allocation";

export default function Home() {
  const [date, setDate] = useState<string>("");

  const getDate = (date: Date | undefined): string => {

    if (date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero indexed
      const day = date.getDate().toString().padStart(2, '0');

      return `${year}-${month}-${day}`;
    }
    else {
      return ""
    }


  }


  const [tasks, setTasks] = useState<IAllocation[]>([]);

  useEffect (() => {
    const getAllocations = async () => {
      const response = await axios.get("/api/tasks");
      setTasks(response.data.data);
    };
    getAllocations().then();
  }, []);

  return (
    <>
      {/* <div className="flex flex-row">
        <div className="flex flex-col">
          <label className="text-xs">Project</label>
          <div className="content-center">
            <select>
              <option>
                Project 1
              </option>
              <option>
                Project 2
              </option>
              <option>
                Project 3
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-xs">Task Id</label>
          <div className="content-center">
            <input placeholder="Task Id"></input>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-xs">Start Date</label>
          <div className="content-center">
            <input className="bg-inherit border border-slate-500 rounded"
              type="date" value={date}
              onChange={(e) => {
                setDate(e.target.value)
              }}
            />
          </div>
        </div>
      </div> */}
      <WorkAllocation tasks={tasks}></WorkAllocation>
      <EventContextProvider>
        <div className="flex flex-col">
          <div className="flex flex-row p-2">
            <div className="flex-none">
              <LeaveInfo></LeaveInfo>
            </div>
            <div className="flex-grow">
              {/*  <Calendar></Calendar> */}
            {/* <WorkAllocation /> */}
            <AddTask />
            </div>
          </div>
          <div>Panel Task</div>
        </div>
      </EventContextProvider>
    </>
  );
}
