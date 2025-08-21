import Keyboard from "@/lib/svgs/keyboard";
import Card from "./card";

const buttons = [
  { key: "⌘ K", title: "Command Palette" },
  { key: "I", title: "Insert" },
  { key: "A", title: "Add" },
  { key: "S", title: "Save" },
  { key: "L", title: "Lock" },
  { key: "⇧ D", title: "Duplicate" },
  { key: "⇧ ⌘ P", title: "Preferences" },
  { key: "⇧ ⌘ O", title: "Open Recent" },
  { key: "C", title: "Copy" },
  { key: "⌥ C", title: "Copy with Option" },
  { key: "⇧ P", title: "Print" },
];

const BuiltForYourKeyboard = () => {
  return (
    <Card className="col-[auto/span_4]">
      {/* Keyboard SVG */}
      <div className="-mt-16 h-auto w-full [mask-image:linear-gradient(transparent_0%,rgba(0,0,0,0.57)_33.98%,black_100%)]">
        <Keyboard />
      </div>

      {/* Buttons row */}
      <div className="relative my-8 flex max-w-full items-center gap-2 overflow-auto [mask-image:linear-gradient(to_right,transparent,black_40%,black_calc(60%),transparent_100%)] [scroll-snap-type:x_mandatory] [scrollbar-width:none_!important]">
        {buttons.map((button, i) => (
          <button
            className="flex h-7 flex-shrink-0 snap-center items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 text-[13px] font-medium leading-7"
            key={i}
          >
            {button.key} {button.title}
          </button>
        ))}
      </div>

      {/* Section heading */}
      <h3 className="text-center text-[26px] leading-[1.2] tracking-[-0.01em]">
        Built for your keyboard
      </h3>
      <p className="mt-4 max-w-[480px] text-balance text-center leading-[1.3] text-[#b4bcd0]">
        Fly through your tasks with rapid-fire keyboard shortcuts for
        everything. Literally everything.
      </p>
    </Card>
  );
};

export default BuiltForYourKeyboard;
