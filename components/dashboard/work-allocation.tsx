import IAllocation from "@/models/allocation";
import { format } from "date-fns";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";

interface Props {
  tasks:IAllocation[]
}

const WorkAllocation: React.FC<Props> = ({ tasks }) => {
  const handleEdit = () => {
    alert("clicked edit");
  };

  const handleDelete = () => {
    alert("clicked delete");
  };

  console.log(tasks);
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="border-b"><th>Task</th>
            <th>Start By</th>
            <th>Status</th>
            <th>Assigned to</th>
            <th>Created By</th>
            <th>End by</th>
            <th>Effort</th>
            <th>Action</th></tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task: IAllocation, index) => (
            <tr key={index} className="border-b">
              <td>{task.task_id} - {task.task_desc}</td>
              <td>{format(task.start_date ? task.start_date : '', "MMM dd, yyyy")}</td>
              <td>{task.status}</td>
              <td>{task.assigned_to}</td>
              <td>{task.created_by}</td>
              <td>{format(task.end_date ? task.end_date : '', "MMM dd, yyyy")}</td>
              <td>{task.estimate}</td>
              <td>
                <div className="flex flex-row">
              <PencilIcon className="h-4 w-4 hover:text-blue-500"></PencilIcon>
              <TrashIcon className="h-4 w-4 hover:text-red-900"></TrashIcon>
              </div>
              </td>
              <td>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <table className="m-5 border-separate border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-200">Task</th>
            <th className="border border-slate-200">Planned start date</th>
            <th className="border border-slate-200">Status</th>
            <th className="border border-slate-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: IAllocation, index) => (
            <tr key={index}>
              <td className="border border-slate-300">
                {task.taskId} - {task.description}
              </td>
              <td className="border border-slate-300">{task.start}</td>
              <td className="border border-slate-300">{task.status}</td>
              <td className="border border-slate-300">
                <div style={{ display: "flex" }}>
                  {" "}
                  <span onClick={handleEdit} style={{ cursor: "pointer" }}>
                    {" "}
                    <PencilSquare />
                  </span>
                  <span onClick={handleDelete} style={{ cursor: "pointer" }}>
                    {" "}
                    <DeleteSvg />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
};

export default WorkAllocation;
