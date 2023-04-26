import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./portfolio.css";

const Appendices = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <article className="experience__details">
        <a
          style={{
            textDecoration: "underline",
          }}
          rel="noreferrer"
        >
          Appendices
        </a>
      </article>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <div>
          <div className="experience__frontend">
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Appendices/Appendix A-Definitions.doc"
                  target="_blank"
                >
                  Appendix A
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Appendices/Appendix B-Program Components.doc"
                  target="_blank"
                >
                  Appendix B
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Appendices/Appendix C-Training Matrix.xlsx"
                  target="_blank"
                >
                  Appendix C
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Appendices/Appendix D-Record Retention.pdf"
                  target="_blank"
                >
                  Appendix D
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a href="/Appendices/Appendix E-KPIs.docx" target="_blank">
                  Appendix E
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Appendices/Appendix G-Workers checklist.doc"
                  target="_blank"
                >
                  Appendix G
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Appendices/Appendix H-Inspection kit component.docx"
                  target="_blank"
                >
                  Appendix H
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Appendices/Appendix I-Fire Extinguishers.jpg"
                  target="_blank"
                >
                  Appendix I
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

export default Appendices;
