export const isRequired = (text) => {
  if (!text || text === '') {
    return false;
  }
  return true;
};
