import Wrapper from "./Wrapper"
import { PrimaryButton, SecondaryButton } from "./Button"
import { erdenes_solutions_pdf, esxs, earth } from "./bucket"
const Hero = () => {
  return (
    <Wrapper>
      <div className="grid md:grid-cols-2">
        <div className="mt-10 md:mt-16 lg:mt-20 xl:mt-32">
          <img
            className=" lg:w-8/12"
            style={{ maxWidth: 500 }}
            src={esxs}
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
            <a href={erdenes_solutions_pdf} download>
              <PrimaryButton text="Танилцуулга" type="primary" />
            </a>

            <a href="#contact">
              <SecondaryButton text="Заавар үзэх" type="secondary" />
            </a>
          </div>
        </div>
        <img
          className="w-full animate-[spin_60s_linear_infinite]"
          src={earth}
          alt="earth"
        />
      </div>
    </Wrapper>
  )
}
export default Hero
