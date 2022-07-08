export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3001/api/v1";
  } else if (process.env.NODE_ENV === "production") {
    return "https://argonautes-wcs-back.herokuapp.com/";
  } else {
    return null;
  }
};
