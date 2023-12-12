export const transformDateFormat = (inputDate: string) => {
  const parts = inputDate.includes("T")
    ? inputDate.split("T")
    : inputDate.split("-");


  const date = inputDate.includes("-")
    ? new Date(`${parts[2]}-${parts[0]}-${parts[1]}`)
    : new Date(`${parts[2]}-${parts[1]}-${parts[3]}`);

  const options:{} = { day: "numeric", month: "long", year: "numeric" };

  const formattedDate = date.toLocaleDateString("en-GB", options);

  return formattedDate;
};
