type Variant = "light" | "dark";

type BlockTitleProps = {
  underTitle?: string;
  title: string;
  subtitle?: string;
  variant?: Variant;
  alignSub?: "center" | "start" | "end";
  align?: "center" | "start";
  alignMobile?: "center" | "start";
  alignSubMobile?: "center" | "start";
  direction?: "row" | "column";
  maxWidthTitle?: string;
  maxWidthSubtitle?: string;
};

export default function BlockTitle({
  underTitle,
  title,
  subtitle,
  variant = "light",
  alignSub = "center",
  align = "center",
  alignMobile = "center",
  alignSubMobile = "center",
  direction = "row",
  maxWidthTitle,
  maxWidthSubtitle,
}: BlockTitleProps) {
  const LightVariant = variant === "light";

  return (
    <div
      className={`
        flex w-full gap-6 max-md:gap-4 max-md:flex-col
        ${direction === "row" ? "flex-row justify-between" : "flex-col"}
        ${alignSub === "center" ? "items-center text-center" : alignSub === "end" ? "items-end" : "items-start text-left"}
        ${
          alignSubMobile === "center"
            ? "max-md:items-center max-md:text-center"
            : "max-md:items-start max-md:text-left"
        }
      `}
    >
      <div
        className={`
        flex flex-col w-full gap-6 max-md:gap-4
        ${align === "center" ? "items-center text-center" : "items-start text-left"}
        ${
          alignMobile === "center"
            ? "max-md:items-center max-md:text-center"
            : "max-md:items-start max-md:text-left"
        }
      `}
      >
        {underTitle && (
          <div
            className={`underTitle flex items-center gap-2 ${
              LightVariant ? "text-[#0052A4]" : "text-[#97C8F9]"
            }`}
          >
            <div
              className={`h-1.5 w-1.5  ${
                LightVariant ? "bg-[#0052A4]" : "bg-[#97C8F9]"
              }`}
            />
            {underTitle}
          </div>
        )}

        <div
          className={`title ${LightVariant ? "text-[#011020]" : "text-white"}`}
          style={{ maxWidth: maxWidthTitle }}
        >
          {title}
        </div>
      </div>

      {subtitle && (
        <div
          className={`subtitle ${
            LightVariant ? "text-[#011020CC]" : "text-[#FFFFFFCC]"
          }`}
          style={{ maxWidth: maxWidthSubtitle }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}
