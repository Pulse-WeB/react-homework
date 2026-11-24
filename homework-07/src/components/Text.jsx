import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
function Text() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <h2>
        {language === "en"
          ? "Hello, welcome to our website!"
          : "Hallo, willkommen auf unserer Website!"}
      </h2>
    </div>
  );
}

export default Text;
