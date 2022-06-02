import Wrapper from "./Wrapper"
import { Disclosure, Transition } from "@headlessui/react"
import { banner, help } from "./bucket"

const Contact = () => {
  return (
    <Wrapper>
      <div id="contact" className="md:w-8/12 mx-auto mb-40 mt-10">
        <h1 className="font-semibold text-2xl xl:text-3xl ">
          Эрдэнэс Сольюшинс ХК-ийн SPO-д
          <span className="text-primary"> оролцож хувьцаа авах заавар</span>
        </h1>
        <img className="mx-auto my-4" src={banner} alt="banner" />
        <div className="">
          <h1 className="text-2xl text-primary">Гүүдсекийн харилцагчид</h1>

          <Disclosure defaultOpen={true} className="">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center px-4 bg-primary/25 my-4 rounded-md w-full md:w-10/12 xl:w-8/12 2xl:w-6/12">
                  <span className="my-2 text-lg text-left">
                    Сонголт 1 : Номинал данс руу мөнгө байршуулж{" "}
                  </span>

                  <div className="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${
                        open ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  {" "}
                  <Disclosure.Panel>
                    <div>
                      Гүүдсек ҮЦК-ийн 5704318133 тоот Хаан банкны данс руу
                      хувьцаа авах мөнгөн дүн болон шимтгэл 0.56%-ийг шилжүүлнэ.
                    </div>
                    <div className="text-red-500 my-2">
                      Гүйлгээний утгад : Өөрийн регистрийн дугаар, утасны
                      дугаар, SPO гэсэн мэдээллүүдийг бичих ёстойг анхаарна уу
                    </div>
                    <div className="italic text-gray-400">
                      Жишээлбэл та 108₮-ийн нэрлэсэн үнэ бүхий тус хувьцаанаас
                      1,000 ширхгийг авах бол 108,000₮ + 605₮(108,000₮-ийн
                      0.56%)=108,605₮-ийг номинал данс руу шилжүүлнэ.
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure defaultOpen={false} className="">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center px-4 bg-primary/25 my-4 rounded-md w-full md:w-10/12 xl:w-8/12 2xl:w-6/12">
                  <span className="my-2 text-lg text-left">
                    Сонголт 2 : www.goodsec.mn/login хэсэгт хандаж
                  </span>

                  <div className="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${
                        open ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel>
                    <div className="my-2">
                      1. Гүүдсек ҮЦК-ийн харилцагчид өөрт олгогдсон нэвтрэх нэр,
                      нууц үгийн тусламжтай харилцагчдын системд нэвтэрнэ.
                    </div>
                    <div className="my-2">
                      2. “IPO захиалга” хэсэгт захиалгаа өгнө
                    </div>
                    <div className="my-2">
                      3. Гар утсанд мессежээр ирсэн зааврын дагуу мөнгөө
                      байршуулна.
                    </div>
                    <div className="">
                      <img className="mx-auto my-2 w-full" alt="3" src={help} />
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl text-primary">Бусад харилцагчид</h1>
          <div className="my-4">
            Гүүдсек ҮЦК-д үнэт цаасны данс нээлгэх ба данс нээгдсэний дараа
            дээрх{" "}
            <span className="text-primary">Гүүдсек ҮЦК-ийн харилцагчид</span>{" "}
            хувьцаа авах зааврын дагуу захиалга өгөх боломжтой.
          </div>
          <div>Данс нээгдэх хугацаа: Ажлын 1-3 өдөр</div>
          <div>
            Үнэт цаасны данс Фэйсбүүк мессенжерээр нээлгэх бол{" "}
            <a
              href="https://www.m.me/goodsecmongolia"
              target="_blank"
              className="text-blue-400 font-semibold hover:underline"
              rel="noreferrer"
            >
              энд дарна уу.
            </a>
          </div>
          <div>
            Үнэт цаасны данс Веб хөтчөөр нээлгэх бол{" "}
            <a
              href="https://www.goodsec.mn/online"
              target="_blank"
              className="text-blue-400 font-semibold hover:underline"
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
          <div>
            Салбаруудын хаяг байршлын мэдээлэл, утасны дугаар харах бол{" "}
            <span className="text-blue-400 font-semibold hover:underline">
              <a
                target="_blank"
                href="https://goodsec.mn/contact"
                rel="noreferrer"
              >
                энд дарна уу
              </a>
            </span>
            .
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
