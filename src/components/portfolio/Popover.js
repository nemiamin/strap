import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./portfolio.css";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <a
        style={{
          textDecoration: "underline",
        }}
        rel="noreferrer"
      >
        Download
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
                  OHS Policy
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Policy/Emergency Preparedness Policy.docx"
                  target="_blank"
                >
                  Emergency Preparedness
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a href="public/Policy/HazREC Policy.docx" target="_blank">
                  HazREC Policy
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a href="/Policy/Chemical Prevention Plan.docx" target="_blank">
                  Chemical Prevention Plan
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a href="/Policy/Training Policy.docx" target="_blank">
                  Training Policy
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

export default PopoverDemo;
