// TODO : change online URL below :
export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3001/api/v1";
  } else if (process.env.NODE_ENV === "production") {
    return "https://urltochange.com";
  } else {
    return null;
  }
};
