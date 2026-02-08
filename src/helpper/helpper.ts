export const getAgeByYearOfBirth = (birth: number) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birth;
}

export function calculateYearsOfExperience(startYear = 2017) {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}