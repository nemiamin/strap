import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./portfolio.css";

const FormsPopover = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <a
        // href="/Health and Safety.doc"
        // target="_blank"
        // className="btn"
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
                <a href="/Health & Safety.doc" target="_blank">
                  Form 1
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="OHS Policy"
                  target="_blank"
                >
                  Form 2
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Emergency Preparedness"
                  target="_blank"
                >
                  Form 3
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="HazREC Policy"
                  target="_blank"
                >
                  Form 4
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Chemical Plan"
                  target="_blank"
                >
                  Form 5
                </a>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Training Policy"
                  target="_blank"
                >
                  Form 6
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Training Policy"
                  target="_blank"
                >
                  Form 7
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Training Policy"
                  target="_blank"
                >
                  Form 8
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Training Policy"
                  target="_blank"
                >
                  Form 9
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Training Policy"
                  target="_blank"
                >
                  Form 10
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Training Policy"
                  target="_blank"
                >
                  Form 11
                </a>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <a
                  href="/Health and Safety.doc"
                  download="Training Policy"
                  target="_blank"
                >
                  Form 12
                </a>
              </article>

              {/* <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>SCSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind</h4>
            </article> */}
            </div>
          </div>
        </div>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default FormsPopover;
