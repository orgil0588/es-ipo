import Wrapper from "./Wrapper"
import { tori, samuel } from "./bucket"
const Child = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-evenly mt-20 md:flex-row ">
        <div>
          <img src={tori} alt="tori" />
        </div>
        <div className="max-w-md">
          <h1 className="font-semibold text-md mx-auto sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:w-8/12 lg:w-full">
            Хүүхдийн<span className="text-primary "> багц</span>
          </h1>
          <br />
          Монголын ирээдүй болсон 👼 хүүхэд багачууддаа Эх үрсийн баярын өдрийг
          тохиолдуулан “Эрдэнэс сольюшинс” ХК-ийн нэмж гаргаж буй хувьцаанаас
          ирээдүйн хуримтлал болгон авах багцуудыг санал болгож байна. ☺️ <br />
          Багц дүнгүүд: <br />
          🔸 108,000₮ - 1,000 ширхэг хувьцаа <br />
          🔸 216,000₮ - 2,000 ширхэг хувьцаа
          <br />
          🔸 324,000₮ - 3,000 ширхэг хувьцаа
          <br />
          🔸 540,000₮ - 5,000 ширхэг хувьцаа
          <br />
          Дээрх багц авсан хүүхдүүдэд данс нээх хураамж болон арилжааны шимтгэл
          0₮❗️
        </div>
        <div>
          <img src={samuel} alt="samuel" />
        </div>
      </div>
    </Wrapper>
  )
}

export default Child
