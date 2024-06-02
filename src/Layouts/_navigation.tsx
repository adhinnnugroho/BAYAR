import CsImage from '@icons/cs.svg';

const NavigationBar = () => {
    const storeCsImage = CsImage;
    return (
        <>
            <div className="grid grid-cols-2 gap-5 bg-gray-200 p-2 fixed w-full top-0">
                <div className="col-span-1">
                    <i className='bx bxs-dashboard text-4xl'></i>
                </div>
                <div className="col-span-1">
                    <div className="flex justify-end">
                        <img src={storeCsImage} alt="" className='w-8 mr-3' />
                        <i className='bx bx-bell text-4xl'></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavigationBar