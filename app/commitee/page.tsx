import { title } from "@/components/primitives";

export default function Commitee() {
  return (
    <div className="pt-16 pb-16 px-14">
      <h1 className="flex flex-row justify-center items-center text-black text-[22px] inter-custom-bolder">
        COMMITTEE
      </h1>
      <div className="Patron flex flex-row justify-between text-black">
        <section className="patron-1 flex flex-col items-center my-32 mx-20">
          <h1 className="text-[#A71E25] inter-custom-bolder text-[22px]">
            CHIEF <span className="text-black">PATRON</span>
          </h1>
          <p className="font-open-sans text-[16px] font-bold pt-5">
            Er. K. Satyanarayana,
            <span className="font-light">President, KLEF</span>
          </p>
          <p className="font-open-sans text-[16px] font-bold pt-5">
            Smt. K. Siva Kanchana Latha,
            <span className="font-light">Secretary,KLEF</span>
          </p>
          <p className="font-open-sans text-[16px] font-bold pt-5">
            Er. K. L. Havish, Vice-President,
            <span className="font-light">KLEF</span>
          </p>
          <p className="font-open-sans text-[16px] font-bold pt-5">
            Er. K. Raja Harin, Vice-President,
            <span className="font-light">KLEF</span>
          </p>
        </section>
        <section className="patron-2 flex flex-col items-center my-32 mx-20">
          <h1 className="text-black inter-custom-bolder text-[22px]">PATRON</h1>
          <p className="font-open-sans text-[16px] font-bold pt-5">
            Dr. K. S. Jagannatha Rao,
            <span className="font-thin">Pro Chancellor, KLEF</span>
          </p>
          <p className="font-open-sans text-[16px] font-bold pt-5">
            Smt. K. Siva Kanchana Latha,
            <span className="font-thin">Secretary, KLEF</span>
          </p>
          <p className="font-open-sans text-[16px] font-bold pt-5">
            Er. K. L. Havish,
            <span className="font-thin">Vice-President, KLEF</span>
          </p>
          <p className="font-open-sans text-[16px] font-bold pt-5">
            Er. K. Raja Harin,
            <span className="font-thin">Vice-President, KLEF</span>
          </p>
        </section>
      </div>


      <div className="mt-10 flex flex-row justify-between">
        <div className="bg-[#D9D9D9] h-[180px] w-[300px] text-center flex flex-col justify-center">
          <h1 className="text-[#A71E25] inter-custom-bolder text-[22px]">
            CONFERENCE <span className="text-black">ADVISOR</span>
          </h1>
          <p>
            Dr.K. Subramanyam <br />
            Principal, College of Sciences, KLEF
          </p>
        </div>
        <div className="bg-[#D9D9D9] h-[180px] w-[300px] text-center flex flex-col justify-center">
          <h1 className="text-[#A71E25] inter-custom-bolder text-[22px]">
            CONFERENCE <span className="text-black">CHAIR</span>
          </h1>
          <p>
            Dr.G.Krishna Mohan <br />
            HoD , Dept of CSA, KLEF
          </p>
        </div>
        <div className="bg-[#D9D9D9] h-[180px] w-[300px] text-center flex flex-col justify-center">
          <h1 className="text-black inter-custom-bolder text-[22px]">
            CONVENER
          </h1>
          <p>Dr.M.N.V Kiran Babu Deputy <br/>HoD , Dept of CSA, KLEF</p>
        </div>
      </div>
    </div>
  );
}
