import Wrapper from "./Wrapper"
import banner from "../assets/banner.png"
const Contact = () => {
  return (
    <Wrapper>
      <div id="contact" className="md:w-8/12 mx-auto mb-40">
        <h1 className="font-semibold text-2xl xl:text-3xl ">
          Эрдэнэс Сольюшинс ХК-ийн SPO-д
          <span className="text-primary"> оролцож хувьцаа авах заавар</span>
        </h1>
        <img className="mx-auto my-4" src={banner} alt="banner" />
        <div className="">
          <h1 className="text-2xl text-primary">Гүүдсекийн харилцагчидад</h1>
          <div className="my-4">
            <h1 className="my-2 text-lg">
              Сонголт 1 : Номинал данс руу мөнгө байршуулж
            </h1>
            Гүүдсек ҮЦК-ийн 5704318133 тоот Хаан банкны данс руу хувьцаа авах
            мөнгөн дүн болон шимтгэл 0.56%-ийг шилжүүлнэ.
            <br />
            <br />
            <span className="text-red-400">
              Гүйлгээний утгад : Өөрийн регистрийн дугаар, утасны дугаар, SPO
              гэсэн мэдээллүүдийг бичих ёстойг анхаарна уу
            </span>{" "}
            <br />
            <br /> Жишээлбэл та 108₮-ийн нэрлэсэн үнэ бүхий тус хувьцаанаас
            1,000 ширхгийг авах бол 108,000₮ + 605₮(108,000₮-ийн
            0.56%)=108,605₮-ийг номинал данс руу шилжүүлнэ.
          </div>
          <div className="border-t border-white ">
            <h1 className="my-2 text-lg">Сонголт 2</h1>
            <a href="https://www.goodsec.mn/login" className="text-blue-500">
              www.goodsec.mn/login
            </a>{" "}
            хэсэгт хандаж: <br />
            <div>
              1. Гүүдсек ҮЦК-ийн харилцагчид өөрт олгогдсон нэвтрэх нэр, нууц
              үгийн тусламжтай харилцагчдын системд нэвтэрнэ.
            </div>
            <div>2. “IPO захиалга” хэсэгт захиалгаа өгнө</div>
            <div>
              3. Гар утсанд мессежээр ирсэн зааврын дагуу мөнгөө байршуулна.
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl text-primary">Бусад харилцагчидад</h1>
          <div className="my-4">
            Гүүдсек ҮЦК-д үнэт цаасны данс нээлгэх ба данс нээгдсэний дараа
            дээрх{" "}
            <span className="text-primary">Гүүдсек ҮЦК-ийн харилцагчид</span>{" "}
            хувьцаа авах зааврын дагуу захиалга өгөх боломжтой.
          </div>
          <div>Данс нээгдэх хугацаа: Ажлын 2-4 өдөр</div>
          <div>
            Үнэт цаасны данс Фэйсбүүк мессенжерээр нээлгэх бол{" "}
            <a
              href="https://www.m.me/goodsecmongolia"
              target="_blank"
              className="text-blue-500"
              rel="noreferrer"
            >
              энд дарна уу.
            </a>
          </div>
          <div>
            Үнэт цаасны данс Веб хөтчөөр нээлгэх бол{" "}
            <a
              href="https://www.goodsec.mn/login"
              target="_blank"
              className="text-blue-500"
              rel="noreferrer"
            >
              энд дарна уу.
            </a>
          </div>
          <div className="italic my-4">
            <span className="text-red-500 text-2xl">*</span>Хэрэв та 108,000₮
            хүртэл дүнгээр “Эрдэнэс сольюшинс” ХК-ны нэмж гарах хувьцааг авах
            бол үнэт цаасны данс нээх хураамж 2,000₮-ийг төлж дансаа нээлгэх
            шаардлагатай. 108,000₮-с дээш дүнгээр хувьцаа авах бол үнэт цаасны
            данс нээх хураамж 0₮ болно.
          </div>
          <div className="my-4 text-xl md:text-2xl">
            SPO-д оролцож хувьцаа авах талаар мэдээлэл авах утас: 11-331878
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
