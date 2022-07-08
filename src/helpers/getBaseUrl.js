const localUrl = "http://localhost:3001/api/v1";
const onlineUrl = "https://argonautes-wcs-back.herokuapp.com/";

export const getBaseUrl = () => {
  console.log(process.env.REACT_APP_ENV);
  if (process.env.ENV === "development") {
    return localUrl;
  } else if (process.env.REACT_APP_ENV === "production") {
    return onlineUrl;
  } else {
    return null;
  }
};
