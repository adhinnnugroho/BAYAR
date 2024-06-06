import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type SimpleMenuCardProps = {
    icon?: any
    title?: string
}
const SimpleMenuCard = (props: SimpleMenuCardProps) => {
    const { icon, title } = props
    return (
        <div className="col-span-1">
            <div className="flex justify-center mx-auto items-center content-center mb-2 border border-gray-400 p-2 rounded-lg drop-shadow">
                <FontAwesomeIcon icon={icon} className='text-3xl text-blue-600' />
            </div>
            <h5 className='text-center font-semibold text-black'>
                {title}
            </h5>
        </div>
    )
}

export default SimpleMenuCard