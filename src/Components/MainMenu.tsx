import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import SimpleMenuCard from '../fragments/card/SimpleMenuCard';
const MainMenu = () => {
    return (
        <div className="">
            <div className="grid grid-cols-4 gap-5 mt-10">
                <div className="col-span-1">
                    <SimpleMenuCard icon={faCreditCard} title="SPP" />
                </div>
                <div className="col-span-1">
                    <SimpleMenuCard icon={faHouse} title="Jajan" />
                </div>
                <div className="col-span-1">
                    <SimpleMenuCard icon={faPiggyBank} title="Nabung" />
                </div>
                <div className="col-span-1">
                    <SimpleMenuCard icon={faPlusCircle} title="Isi Saldo" />
                </div>
            </div>
        </div>
    )
}
export default MainMenu