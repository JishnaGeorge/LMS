import clsx from "clsx";
import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

const Header: React.FC = () => {
  const date = new Date();
  const date = new Date();

  return (
    <div className="border-b border-slate-700 p-1 bg-slate-700/75">
      {date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        weekday: "long",
      })}
    </div>
  );
};
  );
};

const Navigate: React.FC<{ date: Date; navigate: (date: Date) => void }> = ({
  date,
  navigate,
}) => {
  const shift = (direction: number) => {
    const tempDate = new Date(date);
    tempDate.setMonth(tempDate.getMonth() + direction);
    navigate(tempDate);
  };

  return (
    <div className="flex flex-row p-1 border-b border-slate-700/75">
      <div className="flex cursor-pointer">
        <ChevronLeftIcon
          className="h-6 w-6 rounded 
            hover:bg-blue-400 active:bg-blue-600"
          onClick={() => shift(-1)}
        ></ChevronLeftIcon>
      </div>
      <div className="flex-grow text-center">
        {date.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
      </div>
      <div className="flex cursor-pointer">
        <ChevronRightIcon
          className="h-6 w-6 rounded 
            hover:bg-blue-400 
            active:bg-blue-600"
          onClick={() => shift(1)}
        ></ChevronRightIcon>
      </div>
    </div>
  );
};
  );
};

const Weekday: React.FC = () => {
  return (
    <div className="grid grid-cols-7 border-b border-slate-700/75 text-sm text-center">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div className="bg-slate-700/75">Sat</div>
      <div className="bg-slate-700/75">Sun</div>
    </div>
  );
};

const Calendar: React.FC<{
  events?: {
    date: Date;
    description: string;
    type?: "holiday" | "optional" | "applied" | "special" | "leave";
  }[];
  weekstart?: string;
  weekend?: string;
  dateSelected: (date: Date) => void;
}> = ({ events, weekstart, weekend, dateSelected }) => {
  const today = new Date();
  const [x, setX] = useState<Date>(today);
  const [i, setI] = useState("");

  const dateChanged = (date: Date) => {
    setX(date);
  };
  const dateDetails = (date: Date) => {
    console.log(events);
    console.log(date);
    const d = events?.find(
      (item) =>
        item.date.getDate() === date.getDate() &&
        item.date.getMonth() === date.getMonth() &&
        item.date.getFullYear() === date.getFullYear()
    );
    console.log(d);
    setI(d?.description || "");
  };

  return (
    <div className="border border-slate-700 rounded bg-gradient-to-b from-slate-700/75 to-slate-700/50 m-1 text-base font-light">
      <Header></Header>
      <Navigate date={x} navigate={dateChanged}></Navigate>
      <Weekday></Weekday>
      <Days date={x} events={events} />
      <Footer information="" />
    </div>
  );
};
  );
};

const Days: React.FC<{
  date: Date;
  events?: {
    date: Date;
    description: string;
    type?: "holiday" | "optional" | "applied" | "special" | "leave";
  }[];
}> = ({ date, events }) => {
  const dates: {
    date: Date;
    current: boolean;
    type?: "holiday" | "optional" | "applied" | "special" | "leave";
  }[] = [];

  let startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7));
  let current: boolean = false;

  for (let index = 0; index < 42; index++) {
    let tempDate = new Date(startDate);
    tempDate.setDate(tempDate.getDate() + index);
    current = tempDate.getDate() == 1 ? !current : current;
    const event = events?.find(
      (item) =>
        item.date.getDate() === tempDate.getDate() &&
        item.date.getMonth() === tempDate.getMonth() &&
        item.date.getFullYear() === tempDate.getFullYear()
    );
    dates.push({ date: tempDate, current: current, type: event?.type });
  }

  return (
    <div className="grid grid-cols-7">
      {dates.map((item, key) => (
        <Day key={key} date={item.date} current={item.current}></Day>
      ))}
    </div>
  );
};

const Day: React.FC<{
  date: Date;
  current: boolean;
  type?: "holiday" | "optional" | "applied" | "special" | "leave";
}> = ({ date, current, type }) => {
  return current ? (
    <div className={clsx("text-center items-cente", {"bg-green-300":type==="holiday"})}>
      <span
        className={clsx("hover:bg-slate-300/50 rounded-full cursor-pointer")}
      >
        {date.toLocaleDateString("en-IN", { day: "2-digit" })}
      </span>
    </div>
  ) : (
    <div className="text-gray-500/50 text-center">
      {" "}
      {date.toLocaleDateString("en-IN", { day: "2-digit" })}
    </div>
  );
};
  );
};

const Footer: React.FC<{ information: string }> = ({ information }) => {
  return <div>{information}</div>;
};

export default Calendar;

