import { Route, Routes } from "react-router"
import ContactPage from "./components/ContactPage/ContactPage"
import MainPage from "./components/MianPage/MainPage"
import ConfirmPage from "./components/ContactPage/ConfirmPage"
import MainPageHeader from "./components/MainPageHeader"
import MainPageFooter from "./components/MainPageFooter"
function App() {
  return (
    <>
      <div className="min-h-screen bg-whitefont-Playfair no-scroll-width ">
        <div >
          <MainPageHeader />
          <main className="flex flex-col items-center  mb-[64px] max-sm:mb-[32px] overflow-x-hidden">
            <Routes>
              <Route path={"/"} element={<MainPage />} />
              <Route path={"/contact"} element={<ContactPage />} />
              <Route path={"/confirm"} element={<ConfirmPage />} />
            </Routes>
          </main>
          <MainPageFooter />
        </div>
      </div>
    </>
  )
}
export default App
