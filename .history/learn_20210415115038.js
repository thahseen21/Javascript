let langList = [
    {
      name: "English",
      displayName: "English (US)",
      code: "en_us",
      resourceURL:
        "https://vd-translations.s3-ap-southeast-1.amazonaws.com/en_us.json",
    },
    {
      name: "Malayalam",
      displayName: "Malayalam",
      code: "ml_us",
      resourceURL: "http://192.168.1.15:3300/admin/malayalam",
    },
  ],
  tofind = "ml_us";
let currentLang = langList.map((lang) => {
  if (tofind === lang.code) {
    return lang.resourceURL;
  }
});
console.log("currentlang", currentlang);
