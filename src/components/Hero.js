import Wrapper from "./Wrapper"
import xs from "../assets/esxs.svg"
import earthxs from "../assets/earthxs.svg"
import { PrimaryButton, SecondaryButton } from "./Button"
const Hero = () => {
  return (
    <Wrapper>
      <div className="grid md:grid-cols-2">
        <div className="lg:mt-10">
          <img
            className="lg:w-8/12"
            style={{ maxWidth: 500 }}
            src={xs}
            alt="xs-logo"
          />
          <h1 className="text-sm text-left my-10 font-medium sm:text-base sm:w-10/12 md:w-full xl:w-10/12">
            Эрдэнэс сольюшинс ХХК болон 1996 онд байгуулагдсан Хар хорум
            пропертийс ХК компаниуд 2020 онд нэгтгэгдсэн бөгөөд үүний дараа Хар
            хорум пропертийс ХК-ийн нэрийг Эрдэнэс Сольюшинс ХК болгож
            өөрчилсөн. Тус компани нь нээлттэй компани боловч олон нийтээс анх
            удаа хөрөнгө татаж байна.
          </h1>
          <div className="flex items-center pb-4">
            <PrimaryButton text="Танилцуулга" type="primary" />
            <SecondaryButton text="Захиалга өгөх" type="secondary" />
          </div>
        </div>
        <img
          className="w-full animate-[spin_60s_linear_infinite]"
          src={earthxs}
          alt="earth"
        />
      </div>
    </Wrapper>
  )
}
export default Hero
