export const idGenerate = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);

  return random + date;
};

export const dateFormatting = (date) => {
  const dateNew = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return dateNew.toLocaleDateString("es-ES", options);
};
