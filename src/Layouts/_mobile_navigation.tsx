import checklistIcon from "@icons/checklist.svg";
import KeranjangIcon from "@icons/keranjang.svg";

const MobileNavigations = () => {
    const checklistImage = checklistIcon;
    const keranjangImage = KeranjangIcon;
    return (
        <div className="grid grid-cols-4 gap-5 bg-gray-200 p-2 fixed w-full bottom-0">
            <div className="col-span-1">
                <div className="flex justify-center">
                    <i className="bx bxs-dashboard text-4xl"></i>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex justify-center">
                    <img src={checklistImage} alt="" className="w-7 mt-1" />
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex justify-center">
                    <img src={keranjangImage} alt="" className="w-7 mt-1" />
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex justify-center">
                    <i className="bx bx-user-circle text-4xl"></i>
                </div>
            </div>
        </div>
    );
};

export default MobileNavigations