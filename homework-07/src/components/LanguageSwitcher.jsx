import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  function toggleLanguage() {
    if (language === "en") {
      setLanguage("de");
    } else {
      setLanguage("en");
    }
  }
  return (
    <div>
      <button onClick={toggleLanguage}>Switch language</button>
    </div>
  );
}

export default LanguageSwitcher;
