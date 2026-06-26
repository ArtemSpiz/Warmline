import bgWorkspace from "../../assets/bgWorkspace.png";
import imgWorkspace from "../../assets/ImgWorkspace.png";
import BlockTitle from "../../ui/BlockTitle";
import CustomButton from "../../ui/CustomButton";

function Workspace() {
  return (
    <>
      <div className="px-4 py-24 max-xl:py-20 max-md:py-16 max-md:px-0">
        <div className="rounded-xl max-md:rounded-lg flex items-center flex-col gap-12 overflow-hidden relative pt-16 ">
          <div className="w-full z-0 absolute h-full top-0 right-0">
            <img src={bgWorkspace} className="object-cover h-full" />
          </div>
          <div className="flex flex-col z-10 items-center gap-8 px-5">
            <BlockTitle
              direction="column"
              variant="dark"
              title="Manage everything in one place."
              underTitle="Workspace"
              subtitle="Track your accounts, access credentials,
               request replacements, manage billing, and monitor every order from a single dashboard."
              maxWidthSubtitle="645px"
            />
            <CustomButton text="Browse Marketplace" variant="blue" />
          </div>
          <div className="rounded-lg z-10 max-w-250 px-5 max-md:pl-5 max-md:px-0 max-md:h-72 ">
            <img src={imgWorkspace} className="max-md:h-full max-md:object-cover max-md:object-left"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workspace;
