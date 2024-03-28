import { title } from "@/components/primitives";

export default function Commitee() {
  return (
    <div className="pt-16 pb-16 px-32 h-fit">
      <h1 className="flex justify-center text-black inter-custom-xtrabold text-[25px] pl-2">
        COMMITTEE
      </h1>
      <div className="flex justify-between pt-20">
        <div className="bg-[#E7E7E7] h-fit flex flex-col items-center w-[49%] py-[3.5rem]">
          <p className="text-[#A71E25] text-[22px] inter-custom-bolder ">CHIEF <span className="text-black">PATRON</span></p>
          <p className="text-black inter-custom-bold pt-5">Er. K. Satyanarayana, <span className="font-light">President, KLEF</span></p>
          <p className="text-black inter-custom-bold pt-5">Smt. K. Siva Kanchana Latha, <span className="font-light">Secretary, KLEF</span></p>
          <p className="text-black inter-custom-bold pt-5">Er. K. L. Havish, <span className="font-light">Vice-President, KLEF</span></p>
          <p className="text-black inter-custom-bold pt-5">Er. K. Raja Harin, <span className="font-light">Vice-President, KLEF</span></p>
        </div>
        <div className="bg-[#E7E7E7] h-fit flex flex-col items-center w-[49%] py-[3.5rem]">
          <p className="text-black text-[22px] inter-custom-bolder ">PATRON</p>
          <p className="text-black inter-custom-bold pt-5">Dr. K. S. Jagannatha Rao, <span className="font-light">Pro Chancellor, KLEF</span></p>
          <p className="text-black inter-custom-bold pt-5">Dr. A. V. S. Prasad,<span className="font-light"> Pro Vice Chancellor, KLEF</span></p>
          <p className="text-black inter-custom-bold pt-5">Dr. N. Venkataram, <span className="font-light">Pro Vice Chancellor, KLEF</span></p>
          <p className="text-black inter-custom-bold pt-5">Dr. K. Subba Rao,<span className="font-light">Registrar, KLEF</span></p>
        </div>
      </div>
      <div className="flex justify-between pt-10">
        <div className="bg-[#E7E7E7] w-[19rem] flex justify-center"><p className="text-[#A71E25]">CONFERENCE <span className="text-black">CHAIR</span></p>
          <p className="text-black">Dr.K. Subramanyam
            Principal, College of Sciences, KLEF</p>
        </div>
        <div className="bg-[#E7E7E7] w-[19rem] flex justify-center"><p className="text-[#A71E25]">CONFERENCE <span className="text-black">CO-CHAIR</span></p>
        <p className="text-black">Dr.K. Subramanyam
          Principal, College of Sciences, KLEF</p>
          </div>
        <div className="bg-[#E7E7E7] w-[19rem] flex justify-center"><p className="text-black">CONVENER</p><p className="text-black">Dr.K. Subramanyam
          Principal, College of Sciences, KLEF</p></div>
      </div>
    </div>
  );
}

// Er. K. Satyanarayana,
// President, KLEF

// Smt. K. Siva Kanchana Latha, Secretary, KLEF

// Er. K. L. Havish,
// Vice-President, KLEF

// Er. K. Raja Harin,
//  Vice-President, KLEF
