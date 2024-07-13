import './App.css'
import ComponentManagements from '@components/ComponentManagements';
import LayoutManagements from '@layouts/LayoutManagements';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";

function App() {
  return (
    <>
      <LayoutManagements.NavigationBar />
      <div className="bg-gray-200 p-5">
        <div className="mb-2">
          <ComponentManagements.Saldo />
          <ComponentManagements.MainMenu />
        </div>

        <div className="grid grid-cols-2 gap-2 h-auto mt-5">
          <div className="col-span-1">
            <div className="border border-gray-400 p-3 rounded-lg drop-shadow h-52">
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
            <div className="border border-gray-400 p-3 rounded-lg drop-shadow mb-4 h-32">
              <h5 className="text-2xl font-semibold">Tabunganku</h5>
              <h6 className='mt-1'>
                Saldo <span className="text-red-500">Rp 5.000.000</span>
              </h6>
            </div>
            <div className="border border-gray-400 p-2 rounded-lg drop-shadow h-16">
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
      <LayoutManagements.MobileNavigations />
    </>
  )
}

export default App
