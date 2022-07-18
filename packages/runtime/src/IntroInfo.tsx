import { modifiersTitles } from "@locator/shared";
import { createEffect, createSignal, For } from "solid-js";
import { bannerClasses } from "./bannerClasses";
import { getMouseModifiers } from "./isCombinationModifiersPressed";
import { isExtension } from "./isExtension";
import LogoIcon from "./LogoIcon";
import { OpenOptionsButton } from "./OpenOptionsButton";

export function IntroInfo(props: { openOptions: () => void; hide: boolean }) {
  const [showIntro, setShowIntro] = createSignal(true);
  setTimeout(() => {
    setShowIntro(false);
  }, 5000);

  createEffect(() => {
    if (props.hide && showIntro()) {
      setShowIntro(false);
    }
  });

  const modifiers = () => getMouseModifiers();
  return (
    <div
      class={bannerClasses()}
      style={{
        // position: "fixed",
        bottom: showIntro() ? "12px" : "-80px",
        // left: "10px",
        // background: "rgba(255,255,255)",
        // padding: "4px 8px",
        // "padding-top": "10px",
        // "box-shadow":
        //   "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        // "border-radius": "8px",
        // border: "red 2px solid",
        // transition: "all 0.3s ease-in-out",
      }}
    >
      <div class="flex justify-between gap-2">
        <LogoIcon />
        {isExtension() ? (
          <OpenOptionsButton
            onClick={() => {
              props.openOptions();
            }}
          />
        ) : null}
      </div>
      <div class="text-xs mt-2 mb-1">
        Go to component code with{" "}
        {/* {Object.keys(controls.getMap()).map((key, i) => {
          return (
            <>
              {i === 0 ? "" : " + "}
              <Kbd>{modifiersTitles[key as keyof typeof modifiersTitles]}</Kbd>
            </>
          );
        })} */}
        <For each={Object.keys(modifiers())}>
          {(key, i) => {
            return (
              <>
                {i() === 0 ? "" : " + "}
                <div class="inline-block px-1 py-0.5 border border-slate-200 rounded">
                  {modifiersTitles[key as keyof typeof modifiersTitles]}
                </div>
              </>
            );
          }}
        </For>{" "}
        +{" "}
        <div class="inline-block px-1 py-0.5 border border-slate-200 rounded">
          click
        </div>{" "}
      </div>
    </div>
  );
}
