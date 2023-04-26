import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { useTranslation } from "react-i18next";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./portfolio.css";

const FormsPopover = () => {
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
                  <a href="/Form 1-Incident Report Form.docx" target="_blank">
                    {t("portfolio.form1")}
                  </a>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 2-Incident Investigation Form.docx"
                    target="_blank"
                  >
                    {t("portfolio.form2")}
                  </a>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 3-General Inspection Template.docx"
                    target="_blank"
                  >
                    {t("portfolio.form3")}
                  </a>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 4-Hazard Identification Report Form.docx"
                    target="_blank"
                  >
                    {t("portfolio.form4")}
                  </a>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 5-Fire Drill Evaluation Form.docx"
                    target="_blank"
                  >
                    {t("portfolio.form5")}
                  </a>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 6-Violence&Threat Drill Evaluation Form.docx"
                    target="_blank"
                  >
                    {t("portfolio.form6")}
                  </a>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 7-Chemical Risk Assessment Form.docx"
                    target="_blank"
                  >
                    {t("portfolio.form7")}
                  </a>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 8-PPE Pre-use Inspection Form.docx"
                    target="_blank"
                  >
                    {t("portfolio.form8")}
                  </a>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 9-New Worker Orientation Form.docx"
                    target="_blank"
                  >
                    {t("portfolio.form9")}
                  </a>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 10-Contractor Safety Orientation Form.docx"
                    target="_blank"
                  >
                    {t("portfolio.form10")}
                  </a>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Form 11-Training Completion Form.docx"
                    target="_blank"
                  >
                    {t("portfolio.form11")}
                  </a>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a href="/Template 1-Risk Matrix.xls" target="_blank">
                    {t("portfolio.template1")}
                  </a>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <a
                    href="/Template 2-Emergency Vul Assessment Tool.xls"
                    target="_blank"
                  >
                    {t("portfolio.template2")}
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

export default FormsPopover;
