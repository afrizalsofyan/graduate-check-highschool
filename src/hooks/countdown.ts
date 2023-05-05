import { useEffect, useState } from "react";
import moment from "moment";

const useCountdown = () => {
  const targetTime = moment("2023-05-06");

  const [currentTime, setCurrentTime] = useState(moment());

  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(intervalTime);
  }, []);
  return timeBetween;
};

export { useCountdown };
