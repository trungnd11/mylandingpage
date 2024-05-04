export const getAgeByYearOfBirth = (birth: number) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birth;
}