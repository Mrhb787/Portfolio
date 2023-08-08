// Smooth Screen Scroll on Click
export const scrollOnClick = (element) => {
  element.scrollIntoView({
    behaviour: "smooth",
  });
};

// get innerWindowWidth
export const screenWidth = () => {
  return window.innerWidth;
};

// create drive link downloadable url
export const dispatchDriveDownloadLink = (driveLink) => {
  // TODO: create dispatcher to generate drive download link
};
