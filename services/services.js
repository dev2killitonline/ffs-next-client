//import ReactGa from "react-ga";

class Services {
  static getViewPortWidth() {
    // added this var so it doesn't crash on server render
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
  }
  static scrollToTop() {
    window.scrollTo(0, 0);
  }

  static htmlEntities(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  static htmlDecode(input) {
    let e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  static limitCharacters(stringToLimit, desiredLength = 100) {
    return stringToLimit.substring(0, desiredLength);
  }
  /**
   * Tracking events with trackEvent():
   * trackEvent('contact', 'click', 'call')
   * trackEvent('contact', 'click', 'email')
   * trackEvent('contact', 'click', 'sms')
   * trackEvent('social', 'click', 'facebook')
   * trackEvent('social', 'click', 'youtube')
   * trackEvent('social', 'click', 'instagram')
   */
  // static trackEvent(category, action, label = "No label given", value = 0) {
  //   ReactGa.event({
  //     category: category,
  //     action: action,
  //     label: label,
  //     value: value
  //   });
  // }
  static truncString(string, n) {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  static formateAccessBarTitle(title) {
    let formatedTitle = title.replace("/", "");
    formatedTitle = formatedTitle.replace("#", "");
    formatedTitle = formatedTitle.replace(/-/g, " ");
    formatedTitle = formatedTitle.replace(/\//g, " - ");

    return formatedTitle;
  }
  static formateHeadingId(headingText) {
    let formatedHeading = headingText.replace(/\s/g, "-");
    return formatedHeading.toLowerCase();
  }
}

export default Services;
