import data from "../data.json";

export const getNocDetail = () => {
  return data.NOCMedals;
};
export const getSportsList = () => {
  return data.SportList;
};
export const getSportDetail = (id) => {
  const result = data.SportList.find(({ Sport }) => Sport.n_ID === id);
  return result;
};
