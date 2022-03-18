export const idGenerate = () => {
  const random = Match.random().tostring(36).substr(2);
  const date = Date.now().toString(36);

  return random + date;
};
