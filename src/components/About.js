import Wrapper from "./Wrapper"
import { binary, erdenes_solutions_pdf, line } from "./bucket"
import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker"
const About = () => {
  const gaEventTracker = useAnalyticsEventTracker("about")
  return (
    <Wrapper>
      <div className="text-center mx-auto my-20 md:my-40  ">
        <h1 className="font-semibold text-md mx-auto sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:w-8/12">
          <span className="text-primary">Товч</span> танилцуулга
        </h1>
        <p className="text-sm mt-4 w-full mx-auto sm:text-base lg:text-md lg:w-8/12 xl:w-6/12">
          “Эрдэнэс Сольюшинс” ХК нь техник технологи, программ хангамжийн
          чиглэлээр үйл ажиллагаа явуулдаг банкны болон дотоодын санхүүгийн
          системд танигдсан чадварлаг боловсон хүчнээс бүрдсэн компани юм.
          Одоогийн байдлаар дотоодын санхүүгийн зах зээлд программ хангамж
          нийлүүлэх хэд хэдэн гэрээ хэлцлүүдийг хийн амжилттай ажиллаж байгаа
          бөгөөд гадаадын зах зээлд нэвтрэхээр анхан шатны гэрээ хэлцэл, хамтран
          ажиллах гэрээнүүд мөн хийгдсэн байна.
          <br /> <br />
          <span className=" text-primary">
            Монгол Улсын санхүүгийн салбар сүүлийн жилүүдэд программ хангамжийн
            чиглэлд шинэ боломж, шинэ үйлчилгээг нэвтрүүлж дэлхийн жишигтэй хөл
            нийлүүлэн хөгжиж байх ба Компани нь энэ үйл явцад дэлхийн жишигт
            нийцсэн хэн ч, хаанаас ч холбогдон хэрэглэх бүрэн боломжтой, бүртгэл
            тооцооны үндсэн суурь системийг нэвтрүүлэн ажиллаж байна.
          </span>
        </p>
        <div className="text-center mt-4">
          ТА ҮНЭТ ЦААСНЫ ТАНИЛЦУУЛГАА
          <a
            href={erdenes_solutions_pdf}
            download
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 font-semibold hover:underline"
            onClick={() => {
              gaEventTracker("download pdf")
            }}
          >
            {" "}
            ЭНД ДАРЖ{" "}
          </a>
          ТАТАЖ АВНА УУ
        </div>
      </div>

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-32">
        <img src={binary} alt="binary" />
        <div className="absolute w-full backdrop-blur-sm p-6 md:p-0 md:backdrop-blur-none md:relative">
          <h1 className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:w-8/12">
            Төслүүд <span className="text-primary"></span>
          </h1>
          <div>
            <h1 className="font-medium  mt-4">
              <span className="text-primary">Хэрэгжүүлсэн төслүүд</span>
            </h1>

            <ul className="text-sm w-full sm:text-base lg:text-md lg:w-10/12">
              <li className="my-2">- D3ARS СИСТЕМ</li>
              <li className="my-2">- БРОКЕРС.МН СИСТЕМ</li>
              <li className="my-2">
                - БАНК БУС САНХҮҮГИЙН БАЙГУУЛЛАГЫН БҮРТГЭЛИЙН СИСТЕМ
              </li>
              <li className="my-2">- ЗОЧИД БУУДЛЫН БҮРТГЭЛИЙН СИСТЕМ</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium  mt-4">
              <span className="text-primary">Хөгжүүлж буй төслүүд</span>
            </h1>

            <ul className="text-sm w-full sm:text-base lg:text-md lg:w-10/12">
              <li className="my-2">- Үнэт цаасны арилжааны платформ</li>
              <li className="my-2">
                - Банк бус санхүүгийн байгууллагын систем
              </li>
              <li className="my-2">
                - Зээлийн оноо өгөх & Онлайн байдлаар зээл олгох модуль
              </li>
              <li className="my-2">- Гадаад валютын арилжааны платформ</li>
              <li className="my-2">- Үнэт металлын арилжааны платформ</li>
              <li className="my-2">- Үл хөдлөх хөрөнгө зуучлалын систем</li>
            </ul>
          </div>
        </div>
      </div>
      <img src={line} alt="line" className="w-full mb-20" />
    </Wrapper>
  )
}

export default About
