type Variant = "light" | "dark";

type BlockTitleProps = {
  underTitle: string;
  title: string;
  subtitle?: string;
  variant?: Variant;
  align?: "center" | "start";
  alignMobile?: "center" | "start";
  direction?: "row" | "column";
};

export default function BlockTitle({
  underTitle,
  title,
  subtitle,
  variant = "light",
  align = "center",
  alignMobile = "center",
  direction = "row",
}: BlockTitleProps) {
  const LightVariant = variant === "light";

  return (
    <div
      className={`
        flex
        ${direction === "row" ? "flex-row" : "flex-col"}
        ${align === "center" ? "items-center text-center" : "items-start text-left"}
        ${
          alignMobile === "center"
            ? "max-md:items-center max-md:text-center"
            : "max-md:items-start max-md:text-left"
        }
      `}
    >
      <div
        className={`
        flex flex-col w-full
        ${align === "center" ? "items-center text-center" : "items-start text-left"}
        ${
          alignMobile === "center"
            ? "max-md:items-center max-md:text-center"
            : "max-md:items-start max-md:text-left"
        }
      `}
      >
        <div
          className={`underTitle flex items-center gap-2 ${
            LightVariant ? "text-[#0052A4]" : "text-[#97C8F9]"
          }`}
        >
          <div
            className={`h-1.5 w-1.5 rounded-full ${
              LightVariant ? "bg-[#0052A4]" : "bg-white"
            }`}
          />
          {underTitle}
        </div>

        <div
          className={`title ${
            LightVariant ? "text-[#011020]" : "text-[#97C8F9]"
          }`}
        >
          {title}
        </div>
      </div>

      {subtitle && (
        <div
          className={`subtitle ${
            LightVariant ? "text-[#011020CC]" : "text-[#FFFFFFCC]"
          }`}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}
