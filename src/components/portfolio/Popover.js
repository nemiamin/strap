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
                <a
                  href="/Health and Safety.doc"
                  download="OHS Policy"
                  target="_blank"
                >
                  OHS Policy
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Emergency Preparedness"
                  target="_blank"
                >
                  Emergency Preparedness
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="HazREC Policy"
                  target="_blank"
                >
                  HazREC Policy
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Chemical Plan"
                  target="_blank"
                >
                  Chemical Plan
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Training Policy"
                  target="_blank"
                >
                  Training Policy
                </a>
              </article>
              {/* <Appendices /> */}
            </div>
          </div>
        </div>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
