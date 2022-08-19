import bg from "./i18n/bg.js";
import en from "./i18n/en.js";
import rus from "./i18n/rus.js";

const lngs = {
  en: { nativeName: "EN" },
  bg: { nativeName: "BG" },
  rus: { nativeName: "RUS" },
};

const rerender = () => {
  $("body").localize();
};

$(function () {
  i18next.use(i18nextBrowserLanguageDetector).init(
    {
      debug: true,
      fallbackLng: "en",
      resources: {
        ...bg,
        ...en,
        ...rus,
      },
    },
    (err, t) => {
      if (err) return console.error(err);

      jqueryI18next.init(i18next, $, { useOptionsAttr: true });

      // fill language switcher
      Object.keys(lngs).map((lng) => {
        const opt = new Option(lngs[lng].nativeName, lng);
        if (lng === i18next.resolvedLanguage) {
          opt.setAttribute("selected", "selected");
        }
        $("#languageSwitcher").append(opt);
      });
      $("#languageSwitcher").change((a, b, c) => {
        const chosenLng = $(this).find("option:selected").attr("value");
        i18next.changeLanguage(chosenLng, () => {
          rerender();
        });
      });

      rerender();
    }
  );
});
