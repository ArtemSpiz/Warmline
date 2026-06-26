import bgCta from "../../assets/Bannerbg.png";
import BlockTitle from "../../ui/BlockTitle";
import CustomButton from "../../ui/CustomButton";

function CTA() {
  return (
    <>
      <div className="px-4 py-24 max-xl:py-20 max-md:py-16 max-md:px-0">
        <div className="rounded-xl h-132 max-md:h-100 justify-center flex items-center max-md:rounded-lg overflow-hidden relative ">
          <div className="w-full z-0 absolute h-full top-0 right-0">
            <img src={bgCta} className="object-cover h-full" />
          </div>
          <div className="flex flex-col relative z-10 items-center gap-10 px-5">
            <BlockTitle
              direction="column"
              variant="dark"
              title="Build your LinkedIn infrastructure today."
              subtitle="From verified accounts to managed services and a unified workspace—everything you need to scale outbound starts here."
              maxWidthSubtitle="645px"
            />
            <CustomButton text="Browse Marketplace" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CTA;
