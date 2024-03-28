import { title } from "@/components/primitives";

export default function Commitee() {
  return (
    <div className="pt-16 pb-16 px-32 h-fit">
      <h1 className="flex justify-center text-black inter-custom-xtrabold text-[25px] pl-14">
        COMMITTEE
      </h1>
      <div className="flex justify-between">
        <div className="bg-[#E9E9E9] h-fit">
        <p className="text-[#A71E25] w-fit inter-custom-bolder">CHIEF <span className="text-black">PATRON</span></p>
        <p className="text-black">Er. K. Satyanarayana, <span>President, KLEF</span></p>
        <p className="text-black">Smt. K. Siva Kanchana Latha, <span>Secretary, KLEF</span></p>
        <p className="text-black">Er. K. L. Havish, <span>Vice-President, KLEF</span></p>
        <p className="text-black">Er. K. Raja Harin, <span>Vice-President, KLEF</span></p>
        </div>
        <div className="bg-[#E9E9E9] h-fit">
        <p className="text-black w-fit inter-custom-bolder">PATRON</p>
        <p className="text-black">Dr. K. S. Jagannatha Rao, Pro Chancellor, KLEF <span>President, KLEF</span></p>
        <p className="text-black">Smt. K. Siva Kanchana Latha, <span>Secretary, KLEF</span></p>
        <p className="text-black">Er. K. L. Havish, <span>Vice-President, KLEF</span></p>
        <p className="text-black">Er. K. Raja Harin, <span>Vice-President, KLEF</span></p>
        </div>
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
