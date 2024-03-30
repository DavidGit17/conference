import Image from "next/image";
import qr from "../../styles/Qr_Code.svg"
import Link from "next/link";


export default function Registration() {
	return (
		<div className="pt-16 pb-16 lg:px-11 px-6 h-fit bg-white">
			<h1 className="flex flex-row justify-center items-center text-black text-[25px] inter-custom-xtrabold">REGISTRATION</h1>

			<div className="w-full h-fit flex flex-row  bg-[#D9D9D99E] mt-14  flex flex-col rounded rounded-3xl border-b-3 border-[#c4c4c4] shadow-black lg:block hidden">
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
			<ol className="relative border-s border-gray-200 dark:border-gray-700 lg:hidden mt-10">
				<li className="mb-5 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">5th April 2024</time>
					<h3 className=" mt-2 font-semibold text-gray-900 dark:text-white">Last Date of Registartion and Abstract Submission</h3>
					<a href="#" className="inline-flex mt-3 items-center px-4 py-2 text-xs ml-0  text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Click Here to Register <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
					
				</li>
				<li className="mb-5 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10th April 2024</time>
					<h3 className=" mt-2  font-semibold text-gray-900 dark:text-white">Full Paper Submission</h3>
					
				</li>
				<li className="ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">27th April 2024</time>
					<h3 className=" mt-2  font-semibold text-gray-900 dark:text-white">Conference Date</h3>
					
				</li>
			</ol>

			<div className="w-full h-fit flex flex-col bg-white mt-24 rounded rounded-3xl border-1 border-black shadow-black">
				<div className="w-full h-3/6 flex flex-col justify-center items-center  p-8"><p className="px-8 inter rounded rounded-xlp-1 w-fit bg-[#E0E0E0] text-black mb-7">Qr Code</p>

					<Image src={qr} alt="qr code" width={200} height={200} />
				</div>
				<div className="w-full h-3/6 flex flex-col justify-around items-center ">
				<p>Registration Form Link</p>
				<br/>
				<p className="lgtext-base text-sm"><Link  className="underline" href={"https://newerp.kluniversity.in/index.php"}>https://newerp.kluniversity.in/index.php</Link></p>
				<br/>
				<ul className="list-disc lg:pl-0 pl-8">
					<li>Do payment using above QR code and take screenshot of your payment</li>
					<br className="lg:hidden "/>
					<li>Now, Using above link fill the form and upload the screenshot and submit it</li>
				</ul>
				<br/>
				</div>
			</div>


			<div className="w-full h-fit flex flex-col bg-white mt-24 flex rounded rounded-3xl">
				<p className="inter-custom-bolder text-black lg:text-2xl text-xl mb-8">Conference Registration Policies:</p>
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
				<p className="inter-custom-bolder text-black lg:text-2xl text-xl mb-8">Cancellation and Refund Policy:</p>

				<pre className="font-open-sans text-black lg:block hidden">Refunds or cancellations are not permitted after registration.{"\n"}
					<span className="font-open-sans font-black">Note:</span> In all the aforementioned cases, no telephonic communications will be considered</pre>
					<p className="font-open-sans text-black lg:hidden  ">Refunds or cancellations are not permitted after registration.{"\n"}<br/><br/>
					<span className="font-open-sans font-black">Note:</span> In all the aforementioned cases, no telephonic communications will be considered</p>
			</div>


		</div>
	);
}
