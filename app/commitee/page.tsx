import { title } from "@/components/primitives";

export default function Commitee() {
  return (
    <div className="pt-16 pb-16 px-14">
      <h1 className="flex flex-row justify-center items-center text-black text-[29px] inter-custom-xtrabold mb-20">
        COMMITTEE
      </h1>
      <div className="Patron flex flex-row  justify-between text-black mx-20 ">
        <section className="patron flex flex-col items-center justify-center bg-[#E7E7E7] h-[400px] w-[600px]">
          <h1 className="text-[#A71E25] inter-custom-xtrabold text-[25px]">
            CHIEF <span className="text-black">PATRON</span>
          </h1>
          <p className="font-open-sans text-[15px] font-bold pt-5">
            Er. K. Satyanarayana,
            <span className="font-light">President, KLEF</span>
          </p>
          <p className="font-open-sans text-[15px] font-bold pt-5">
            Smt. K. Siva Kanchana Latha,
            <span className="font-light">Secretary, KLEF</span>
          </p>
          <p className="font-open-sans text-[15px] font-bold pt-5">
            Er. K. L. Havish, Vice-President,
            <span className="font-light">KLEF</span>
          </p>
          <p className="font-open-sans text-[15px] font-bold pt-5">
            Er. K. Raja Harin, <span className="font-light">Vice-President, KLEF</span>
          </p>
        </section>
        <section className="patron flex flex-col items-center justify-center bg-[#E7E7E7] h-[400px] w-[600px]">
          <h1 className="text-black inter-custom-bolder text-[25px]">PATRON</h1>
          <p className="font-open-sans text-[15px] font-bold pt-5">
            Dr. K. S. Jagannatha Rao,
            <span className="font-thin">Pro Chancellor, KLEF</span>
          </p>
          <p className="font-open-sans text-[15px] font-bold pt-5">
            Smt. K. Siva Kanchana Latha,
            <span className="font-thin">Secretary, KLEF</span>
          </p>
          <p className="font-open-sans text-[15px] font-bold pt-5">
            Er. K. L. Havish,
            <span className="font-thin">Vice-President, KLEF</span>
          </p>
          <p className="font-open-sans text-[15px] font-bold pt-5">
            Er. K. Raja Harin,
            <span className="font-thin">Vice-President, KLEF</span>
          </p>
        </section>
      </div>

      <div className="mt-10 flex flex-row justify-between mx-20">
        <div className="bg-[#D9D9D9] h-[200px] w-[350px] text-center flex flex-col justify-center">
          <h1 className="text-[#A71E25] inter-custom text-[21px]">
            CONFERENCE <span className="text-black">ADVISOR</span>
          </h1>
          <p className="text-black open-sans-regular-sec text-[16px] pt-10">
            Dr.K. Subramanyam <br />
            <span className="font-light text-[15px] open-sans-regular-thi">
              Principal, College of Sciences, KLEF
            </span>
          </p>
        </div>
        <div className="bg-[#D9D9D9] h-[200px] w-[350px] text-center flex flex-col justify-center">
          <h1 className="text-[#A71E25] inter-custom text-[21px]">
            CONFERENCE <span className="text-black">CHAIR</span>
          </h1>
          <p className="text-black open-sans-regular-sec text-[16px] pt-10">
            Dr.G.Krishna Mohan <br />
            <span className="font-light text-[15px] open-sans-regular-thi">
              HoD , Dept of CSA, KLEF
            </span>
          </p>
        </div>
        <div className="bg-[#D9D9D9] h-[200px] w-[350px] text-center flex flex-col justify-center">
          <h1 className="text-black inter-custom text-[21px]">CONVENER</h1>
          <p className="text-black open-sans-regular-sec text-[16px] pt-10">
            Dr.M.N.V Kiran Babu Deputy <br />
            <span className="font-light text-[15px] open-sans-regular-thi">
              HoD , Dept of CSA, KLEF
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
