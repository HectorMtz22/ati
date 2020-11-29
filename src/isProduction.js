const publicPath = () => {
  if (process.env.NODE_ENV === "production") {
    return "/ati";
  } else {
    return "";
  }
};

export default publicPath;
