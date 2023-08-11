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
