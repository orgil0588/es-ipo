import Wrapper from "./Wrapper"
import SpoInfoItems from "./SpoInfoItems"
const SpoInfo = () => {
  return (
    <Wrapper>
      <div className="w-full mx-auto shadow-2xl bg-zinc-800/25 py-4 px-10 md:w-10/12 lg:w-8/12 ">
        <div className="flex justify-between pb-3 border-b border-primary lg:pb-6">
          <SpoInfoItems text="Нэгж хувьцаа" desc="108" span="төгрөг" />
          <SpoInfoItems text="Санал болгох" desc="9.5" span="%" />
          <SpoInfoItems text="Татан төвлөрүүлэлт" desc="1.8" span="тэрбум" />
        </div>
        <div className="pt-3 text-center md:pt-4 lg:pt-6">
          <h1 className="text-md text-primary lg:text-lg ">
            Захиалгын хугацаа
          </h1>
          <p className="text-lg font-semibold md:text-2xl lg:text-3xl mt-2">
            <span className="mr-2 text-primary">2022</span>
            06.13 - 06.17
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default SpoInfo
