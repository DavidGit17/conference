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

			
			<div className="w-full h-fit flex flex-col bg-white mt-24 flex rounded rounded-3xl">
				<p className="inter-custom-bolder text-black text-2xl mb-8">Conference Registration Policies:</p>
				<ol className="list-disc font-open-sans text-black text-md ml-6 leading-7">
					<li>Each accepted work must include at least one author registration; otherwise, the article will be removed from the Conference Proceedings.</li>
					<li>Each paid registration covers only one paper; a paper should only have a maximum of 6 authors. However, the multiple submissions with same set of authors will not be encouraged.</li>
					<li>Each normal registration includes one paper publication in proceedings, a bag, proceedings, program schedule, conference payment receipt, individual certificates to all the authors 
      and attending all technical sessions.</li>
					<li>Payment should be made through the below mentioned payment gateways. For bank transfer, please contact the conference email. Payment of fees must accompany all registration files
      and it must be submitted to conference email. The conference organizer will not accept any bank charges associated with the transfer of money.</li>
					<li>In order to initiate a refund, Please refer the CANCELLATION & REFUND of Registration Fee</li>
				</ol>
			</div>

			<div className="w-full h-fit flex flex-col bg-white mt-24 flex rounded rounded-3xl">
				<p className="inter-custom-bolder text-black text-2xl mb-8">Cancellation and Refund Policy:</p>
				
				<pre className="font-open-sans text-black">Refunds or cancellations are not permitted after registration.{"\n"}
<span className="font-open-sans font-black">Note:</span> In all the aforementioned cases, no telephonic communications will be considered</pre>
			</div>


		</div>
	);
}
