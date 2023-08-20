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

// screen Height
export const screenHeight = () => {
  return window.innerHeight;
};

// get the active section
export const getActiveSection = () => {
  const sections = document.querySelectorAll("section");
  const currentPosition = window.scrollY;
  var currHeight = 0;
  for (var s = 0; s < sections.length; s++) {
    const currentSection = sections[s];
    const clientHeight = currentSection.clientHeight;
    if (
      currentPosition >= currHeight &&
      currentPosition < currHeight + clientHeight
    )
      return s;
    currHeight = currHeight + clientHeight;
  }
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

// reveal a element on scroll
export const reveal = () => {
  var reveals = document.querySelectorAll(".reveal");
  // console.log(reveals);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

// open a url in new window
export const openUrl = (url) => {
  window.open(url, "_blank");
};

// get years from months
export const getYearsFromMonths = (months) => {
  return parseInt(months / 12);
};
