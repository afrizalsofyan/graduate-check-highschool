import React from "react";

const DateTimeBox = ({ value, type }: { value: number; type: string }) => {
  return (
    <div className="p-10 leading-5 items-center flex flex-col border">
      <span className="">{value}</span>
      <span className="uppercase leading-4">{type}</span>
    </div>
  );
};

const DateTimeWidget = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <>
      <DateTimeBox value={days} type={"Days"} />
      <DateTimeBox value={hours} type={"Hours"} />
      <DateTimeBox value={minutes} type={"Minutes"} />
      <DateTimeBox value={seconds} type={"Seconds"} />
    </>
  );
};

const CountdownTimer = ({ duration }: { duration: moment.Duration }) => {
  return (
    <DateTimeWidget
      days={duration.days()}
      hours={duration.hours()}
      minutes={duration.minutes()}
      seconds={duration.seconds()}
    />
  );
};

export default CountdownTimer;
