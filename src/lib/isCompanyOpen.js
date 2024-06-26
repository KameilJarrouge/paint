import { DateTime } from "luxon";
const businessHours = {
  monday: { open: "09:00", close: "18:00" },
  tuesday: { open: "09:00", close: "18:00" },
  wednesday: { open: "09:00", close: "18:00" },
  thursday: { open: "09:00", close: "18:00" },
  friday: { open: "09:00", close: "18:00" },
  // ... (continue for other days)
};

export function isCompanyOpenNow() {
  const now = DateTime.now().setZone("UTC+4"); // Set the desired time zone
  const currentDay = now.weekdayLong.toLowerCase();

  if (!businessHours[currentDay]) return false;

  const { open, close } = businessHours[currentDay];
  const [openHour, openMinute] = open.split(":").map(Number);
  const [closeHour, closeMinute] = close.split(":").map(Number);

  const currentTime = now.hour * 60 + now.minute;
  const openingTime = openHour * 60 + openMinute;
  const closingTime = closeHour * 60 + closeMinute;

  return currentTime >= openingTime && currentTime <= closingTime;
}
