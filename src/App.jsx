import { useEffect, useState } from 'react'
import './App.css'

let daysTime = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function App() {
  const [date, setDate] = useState({
    hours: 0,
    minutes: 0,
    seg: 0,
    day: 0,
    month: 0,
    year: "",
    point: true
  })

  useEffect(() => {
    const interval = setInterval(() => {
      let dataTime = new Date();
      setDate(prevDate => ({
        ...prevDate,
        hours: dataTime.getHours(),
        minutes: dataTime.getMinutes(),
        seg: dataTime.getSeconds(),
        day: dataTime.getDay(),
        month: dataTime.getMonth(),
        year: dataTime.getFullYear(),
        point: !prevDate.point
      }))
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="clock">
        <div className="clock__days">
          {
            daysTime.map((val, id) => (
              <span
                key={id}
                className={date.day === id ? "clock__day active" : "clock__day"}
              >
                {val}
              </span>
            ))
          }
        </div>
        <div className="clock__time">
          {(date.hours > 9) ? date.hours : "0" + date.hours}
          <span className="clock__flicker">
            {(date.point) ? ":" : " "}
          </span>
          {(date.minutes > 9) ? date.minutes : "0" + date.minutes}
        </div>
        <div className="clock__today">
          <div className="clock__minutes">
            <p>sec</p>
            <span className='clock__minute'>{(date.seg > 9) ? date.seg : "0" + date.seg}</span>
          </div>
          <div className="clock__date">
            {date.month + 1}-{((date.year) + "").slice(-2)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
