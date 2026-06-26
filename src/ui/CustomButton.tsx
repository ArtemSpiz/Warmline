type Variant = "light" | "blue" | "ghost";

type CustomButtonProps = {
  text?: string;
  icon?: string;
  variant?: Variant;
};

function CustomButton({ text, icon, variant = "light" }: CustomButtonProps) {
  const styles = {
    light: "bg-white text-[#0052A4] border-[#FFFFFF1A]",
    blue: "bg-[#1968B8] text-white border-[#3077BE]",
    ghost: "bg-[#004B970F] text-[#011020] border-[#004B971A]",
  };

  return (
    <>
      <button
        className={`py-3  xl:min-w-78.75 leading-[110%] rounded-sm border font-bold text-base  uppercase ${icon ? "px-3" : "px-8 w-max max-md:w-full "} ${styles[variant]}`}
      >
        {text}
        {icon && (
          <div className="w-5 h-5">
            <img src={icon} />
          </div>
        )}
      </button>
    </>
  );
}

export default CustomButton;
