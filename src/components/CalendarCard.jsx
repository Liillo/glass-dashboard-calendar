export default function CalendarCard() {
  const now = new Date();

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const day = String(now.getDate()).padStart(2, "0");

  return (
    <div className="cal-card">
      <div className="cal-top">
        <div>
          <div className="cal-month">{month}</div>
          <div className="cal-year">{year}</div>
        </div>

        <div className="cal-label-block">
          <p>Minimalism style<br />Typography</p>
        </div>
      </div>

      <div className="cal-orb-wrap"></div>

      <div className="cal-date-block">
        <p>
          {dayName} {day}<br />
          {month} {year}<br />
        </p>
      </div>

      <div className="cal-footer">
        <div className="cs-mark">
          cs⁺
          <span>Creative.style</span>
        </div>

        <button className="click-btn">
          Click Here
        </button>
      </div>
    </div>
  );
}