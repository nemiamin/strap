import React from "react";
import { useTranslation } from "react-i18next";
import * as Popover from "@radix-ui/react-popover";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./translation.css";

const Translation = () => {
  const { t, i18n } = useTranslation("common");
  const [currentLang, setLang] = React.useState("English");
  React.useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      setLang(
        lang === "en" ? "English" : lang === "fil" ? "Filipino" : "Spanish"
      );
    }
  }, []);
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <a
          style={{
            textDecoration: "underline",
          }}
          rel="noreferrer"
        >
          {currentLang}
        </a>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div>
            <div className="experience__frontend">
              <div className="experience__content">
                <article className="experience__details">
                  {/* <BsFillPatchCheckFill className="experience__details-icon" /> */}
                  <a
                    onClick={() => {
                      i18n.changeLanguage("en");
                      localStorage.setItem("language", "en");
                      setLang("English");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    English
                  </a>
                </article>
                <article className="experience__details">
                  {/* <BsFillPatchCheckFill className="experience__details-icon" /> */}
                  <a
                    onClick={() => {
                      i18n.changeLanguage("spa");
                      localStorage.setItem("language", "spa");
                      setLang("Spanish");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Spanish
                  </a>
                </article>
                <article className="experience__details">
                  {/* <BsFillPatchCheckFill className="experience__details-icon" /> */}
                  <a
                    onClick={() => {
                      i18n.changeLanguage("fil");
                      localStorage.setItem("language", "fil");
                      setLang("Filipino");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Filipino
                  </a>
                </article>
              </div>
            </div>
          </div>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Translation;
