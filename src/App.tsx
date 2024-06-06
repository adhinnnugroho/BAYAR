import './App.css'
import MainMenu from './Components/MainMenu';
import Saldo from './Components/Saldo';
import MobileNavigations from './Layouts/_mobile_navigation';
import NavigationBar from './Layouts/_navigation'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="bg-gray-200 p-5">
        <div className="mb-2">
          <Saldo />
          <MainMenu />
        </div>

        <div className="grid grid-cols-2 gap-2 h-auto mt-5">
          <div className="col-span-1">
            <div className="bg-white p-3 rounded-lg drop-shadow h-52">
              <h5 className="text-2xl font-semibold">Pembayaran SPP</h5>
              <div style={{ width: 90, height: 90 }} className='flex justify-center content-center mx-auto'>
                <CircularProgressbar
                  value={29}
                  text={`20%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                  })}
                />
              </div>

              <div className="flex justify-end mt-2">
                <a href="">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white p-3 rounded-lg drop-shadow mb-4 h-24">
              <h5 className="text-2xl font-semibold">Tabunganku</h5>
              <h6 className='mt-1'>
                Saldo <span className="text-red-500">Rp 5.000.000</span>
              </h6>
            </div>
            <div className="bg-white p-2 rounded-lg drop-shadow h-24">
              <h5 className="text-2xl font-semibold">Banner</h5>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h5 className='text-xl font-semibold'>History Transaksi</h5>
          <div className="mt-5 mb-12">
            <div className="border border-gray-500 p-2 rounded-lg mb-5">History 1</div>
            <div className="border border-gray-500 p-2 rounded-lg mb-5">History 1</div>
          </div>
        </div>
      </div>
      <MobileNavigations />
    </>
  )
}

export default App
