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
  const downloadLink = "https://drive.google.com/uc?export=download&id";
  const objectId = driveLink.split("/")[5];
  return downloadLink + "=" + objectId;
};

// get current section
export const currentSection = (url) => {
  return url ? url.replace("#", "") : "Home";
};
