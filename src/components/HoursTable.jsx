import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Day", "Open", "Close"];

const TABLE_ROWS = [
  {
    day: "Monday",
    open: "09:00 AM",
    close: "05:00 PM",
  },
  {
    day: "Tuesday",
    open: "09:00 AM",
    close: "05:00 PM",
  },
  {
    day: "Wednesday",
    open: "09:00 AM",
    close: "05:00 PM",
  },
  {
    day: "Thursday",
    open: "09:00 AM",
    close: "05:00 PM",
  },
  {
    day: "Friday",
    open: "09:00 AM",
    close: "05:00 PM",
  },
];

export default function HoursTable() {
  return (
    <Card className="h-full w-full overflow-hidden">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  className="font-normal leading-none opacity-90 text-foreground"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ day, open, close }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={day}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-foreground"
                  >
                    {day}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-foreground"
                  >
                    {open}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-foreground"
                  >
                    {close}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
