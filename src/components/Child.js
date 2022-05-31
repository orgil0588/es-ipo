import Wrapper from "./Wrapper"
import { tori, samuel } from "./bucket"
const Child = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-evenly mt-20 md:flex-row ">
        <div>
          <img src={tori} alt="tori" />
        </div>
        <div className="w-96">
          <h1 className="font-semibold text-md mx-auto sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:w-8/12 lg:w-full">
            Хүүхдийн<span className="text-primary "> багц</span>
          </h1>
          <br />
          Монголын ирээдүй болсон хүүхэд багачууддаа “Монголын эх үрсийн баярын
          өдөр”-г тохиолдуулан “Эрдэнэс сольюшинс” ХК-ийн нэмж гаргаж буй
          хувьцааг ирээдүйн хуримтлал болгон авах багцуудыг санал болгож байна.{" "}
          <br />
          Багц дүнгүүд: <br />
          🔸 108,000₮ <br />
          🔸 216,000₮ <br />
          🔸 324,000₮ <br />
          🔸 540,000₮ <br />
          <span className="text-red-500 text-2xl">*</span>Багцын дүнд арилжааны
          шимтгэл тооцогдохгүй. Мөн үнэт цаасны дансгүй бол данс нээх хураамж
          0₮!
        </div>
        <div>
          <img src={samuel} alt="samuel" />
        </div>
      </div>
    </Wrapper>
  )
}

export default Child
