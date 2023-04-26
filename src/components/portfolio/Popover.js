import React from "react";
import { useTranslation } from "react-i18next";
import * as Popover from "@radix-ui/react-popover";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./portfolio.css";

const PopoverDemo = () => {
  const { t } = useTranslation("common");
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <a
          style={{
            textDecoration: "underline",
          }}
          rel="noreferrer"
        >
          {t("portfolio.downloadBtn")}
        </a>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div>
            <div className="experience__frontend">
              <div className="experience__content">
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a href="/Policy/OHS Policy.doc" target="_blank">
                    {t("portfolio.policy1")}
                  </a>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Policy/Emergency Preparedness Policy.docx"
                    target="_blank"
                  >
                    {t("portfolio.policy2")}
                  </a>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a href="/Policy/HazREC Policy.docx" target="_blank">
                    {t("portfolio.policy3")}
                  </a>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Policy/Chemical Prevention Plan.docx"
                    target="_blank"
                  >
                    {t("portfolio.policy4")}
                  </a>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a href="/Policy/Training Policy.docx" target="_blank">
                    {t("portfolio.policy5")}
                  </a>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/FINAL-COST ESTIMATE (1).xlsx"
                    download="FINAL-COST ESTIMATE"
                    target="_blank"
                  >
                    {t("portfolio.policy6")}
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

export default PopoverDemo;
