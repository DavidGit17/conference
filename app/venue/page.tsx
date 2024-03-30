import Image from "next/image";
import collegeim  from "../../styles/collegeim.svg"
export default function Venue() {
  return (
    <div className="pt-16 pb-16 lg:px-11 px-4 h-fit bg-white">
      <h1 className="flex flex-row justify-center items-center text-black text-[25px] inter-custom-xtrabold">
        VENUE
      </h1>
      <div className="w-full lg:h-96 mt-12 flex lg:flex-row flex-col ">
        <div className=" lg:w-3/6 h-full flex justify-center items-center">
          <pre className="text-black bg-[#E7E7E780] p-6 inter w-fit text-xl lg:inline-block hidden ">
            Department of Computer Science & Applications,{"\n"}
            SDC block, 5th floor, KLEF, Vaddeswaram, 522302
          </pre>
          <p className="text-black bg-[#E7E7E780] p-4 inter w-fit lg:hidden inline-block ">
            Department of Computer Science & Applications,{"\n"}
            SDC block, 5th floor, KLEF, Vaddeswaram, 522302
          </p>
        </div>
        <div className=" lg:w-3/6 mt-6 h-full flex justify-center items-center">
			<Image src={collegeim} alt="college image" priority width={500} height={500}  className="rounded rounded-lg"/>
		</div>
      </div>
    </div>
  );
}
