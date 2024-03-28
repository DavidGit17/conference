import { title } from "@/components/primitives";
import Link from "next/link";
import Image from "next/image";
import qr from "../../styles/Qr_Code.svg"


export default function Registration() {
	return (
		<div className="pt-16 pb-16 px-11 h-fit bg-white">
			<h1 className="flex flex-row justify-center items-center text-black text-[22px] inter-custom-bold">REGISTRATION</h1>

			<div className="w-full h-fit flex flex-row  bg-[#D9D9D99E] mt-14  flex flex-col rounded rounded-3xl border-b-3 border-[#c4c4c4] shadow-black">
				<div className="h-4/6 w-full  text-black text-xl flex flex-row justify-between p-8 items-center">
					<pre className="inter-custom-bold  text-center">Last date for Registartion & {"\n"}Abstract Submission </pre>
					<p className="inter-custom-bold ">Full Paper Submission</p>
					<p className="inter-custom-bold ">Final Date for Acceptance of Paper</p>
					<p className="inter-custom-bold ">Final Paper Submission</p>
				</div>
				<div className="h-2/6 w-full  text-black flex text-xl flex-row justify-evenly p-8 border-black border-t-1 gap-48 ">
					<pre className="inter ">5<sup>th</sup> April, 2024</pre>
					<p className="inter ">10<sup>th</sup> April, 2024</p>
					<p className="inter ">15<sup>th</sup> April, 2024</p>
					<p className="inter ">20<sup>th</sup> April,  2024</p>
				</div>
			</div>

			<div className="w-full h-fit flex flex-row  bg-white mt-24 flex rounded rounded-3xl border-1 border-black shadow-black">
				<div className="w-3/6 h-full flex flex-col justify-center items-center  p-8"><p className="px-8 inter rounded rounded-xlp-1 w-fit bg-[#E0E0E0] text-black">Qr Code</p>

				<Image src={qr} alt="qr code" width={200} height={200} />
				</div>
				<div className="w-3/6 h-full ">

					
				</div>
			</div>
		</div>
	);
}
