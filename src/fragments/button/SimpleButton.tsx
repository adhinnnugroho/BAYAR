interface SimpleButtonProps {
    className?: string,
    title?: string
    onClick?: () => void,
    backgroundColor?: string
}

const SimpleButton = ({
    className = '',
    title = '',
    onClick,
    backgroundColor = 'bg-blue-600'
}: SimpleButtonProps) => {

    return (
        <button className={`${backgroundColor} p-3 rounded-lg text-white font-semibold ${className}`} onClick={onClick}>
            {title}
        </button>
    );
};

export default SimpleButton