export const transformDateFormat = (inputDate: string) => {
  const parts = inputDate.split("-");

  const date = new Date(`${parts[2]}-${parts[0]}-${parts[1]}`);

  const options:{} = { day: "numeric", month: "long", year: "numeric" };

  const formattedDate = date.toLocaleDateString("en-GB", options);

  return formattedDate;
};
