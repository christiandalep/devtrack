export const formatDate = (date) => {
  if (!date) {
    return "No deadline";
  }
  return new Date(date).toLocaleDateString("en-NZ");
};

export const formatInputDate = (date) => {
  if (!date) {
    return "";
  }
  return new Date(date).toISOString().split("T")[0];
};
