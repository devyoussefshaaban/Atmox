export const getStatIcon = (min: number, max: number) => {
  const avg: number = Math.floor((max - min) / 2)

  if (avg < 5) return "/images/icon-snow.webp"
  if (avg < 15) return "/images/icon-storm.webp"
  if (avg < 20) return "/images/icon-fog.webp"
  if (avg < 25) return "/images/icon-overcast.webp"
  if (avg < 30) return "/images/icon-cloudy.webp"
  if (avg < 35) return "/images/icon-partly-cloudy.webp"
  if (avg < 40) return "/images/icon-sunny.webp"

  else return "/images/icon-sunny.webp"
}

export const getHourFromString = (str: string): string => {
  const hour = Number(str.split(":")[0]) > 12 ? Number(str.split(":")[0]) - 12 : Number(str.split(":")[0])

  return hour + ":" + str.split(":")[1] + (Number(str.split(":")[0]) > 12 ? " PM" : " AM")
}
