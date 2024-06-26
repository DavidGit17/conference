export default function Publication() {
	return (
		<div className="pt-16 pb-16 lg:px-14 px-5 h-fit bg-white">
			<h1 className="flex flex-row justify-center items-center text-black text-[25px] inter-custom-xtrabold ">PUBLICATION</h1>
			<div className="w-full h-fit flex flex-row  bg-[#D9D9D99E] mt-16 p-8 flex flex-col rounded rounded-3xl border-b-3 border-[#c4c4c4] shadow-black">
				<h1 className="text-black inter-custom-bolder text-xl">Ethical <span className="text-[rgb(167,30,37)]">Requirement</span></h1>
				<p className="font-open-sans text-black lg:text-lg text-base mt-5 lg:text-justify leading-7 ">Following ethical guidelines is required in scientific publishing.<br /> <br /> Understand Conference publishing guidelines and concepts to ensure ethical requirements
					are met.<br /><br /> Learn about authorship, how to cite sources appropriately, plagiarism, how to report your data accurately, and the importance of publishing original
					research.</p>
			</div>

			<div className="w-full h-fit flex flex-row  bg-[#D9D9D99E] mt-16 p-8 flex flex-col rounded rounded-3xl border-b-3 border-[#c4c4c4] drop-shadow-2xl shadow-black">
				<h1 className="text-black inter-custom-bolder text-xl">Definition of <span className="text-[rgb(167,30,37)]">Authorship</span></h1>
				<pre className="font-open-sans text-black lg:text-lg text-base mt-5 lg:text-justify  lg:leading-10 leading-7 lg:inline-block hidden"><b>Who should be listed as an author on your paper?</b>{"\n"}
					NCETCA considers individuals who meet all of the following criteria to be authors:{"\n"}
					<b>1.</b> Made a significant intellectual contribution to the theoretical development, system or experimental design, prototype {"\n"}    development and/or the analysis and
					interpretation of data associated with the work contained in the paper.{"\n"}
					<b>2.</b> Contributed to drafting the paper or reviewing and/or revising it for intellectual content.{"\n"}
					<b>3.</b> Approved the final version of the paper as accepted for publication, including references
					Contributors who do not meet all {"\n"}   of the above criteria may be included in the Acknowledgment section of the paper. Omitting an author who contributed to <br />   your paper or including a person who did not fulfill all of the above requirements is considered a breach of publishing ethics.</pre>

				<p className="font-open-sans text-black lg:text-lg text-base mt-5 lg:text-justify text-left lg:leading-10 leading-7 lg:hidden inline-block"><b>Who should be listed as an author on your paper?</b>{"\n"}
					NCETCA considers individuals who meet all of the following criteria to be authors:	<br /><br />
					<b>1.</b> Made a significant intellectual contribution to the theoretical development, system or experimental design, prototype development and/or the analysis and
					interpretation of data associated with the work contained in the paper.<br /><br />
					<b>2.</b> Contributed to drafting the paper or reviewing and/or revising it for intellectual content.<br /><br />
					<b>3.</b> Approved the final version of the paper as accepted for publication, including references
					Contributors who do not meet all {"\n"} of the above criteria may be included in the Acknowledgment section of the paper. Omitting an author who contributed to{"\n"}<br /> your paper or including a person who did not fulfill all of the above requirements is considered a breach of publishing ethics.</p>
			</div>

			<div className="w-full h-fit flex flex-row bg-[#D9D9D99E] mt-16 p-8 flex flex-col rounded rounded-3xl border-b-3 border-[#c4c4c4] drop-shadow-2xl shadow-black">
				<h1 className="text-black inter-custom-bolder text-xl">Proper Citation <span className="text-[#A71E25]"> Practices</span></h1>
				<div className="font-open-sans text-black lg:text-lg mt-5 text-justify leading-10 lg:inline-block hidden ">
					<p>You can improve research reproducibility with proper citation practices. Always cite your sources. Citation is required in several instances.</p><br />
					<p><b>Follow these guidelines:</b></p><br />
					<ul className="list-disc pl-4">
						<li>Direct quotation: Place verbatim text from another source in quotation marks. Indent text for longer quotes. Include a citation to the original source.</li>
						<li>Paraphrase or summary: Include a citation when restating or summarizing information from another source, including ideas, processes, arguments, or conclusions.</li>
						<li>Data, research results, information, graphics, or tables: Cite the original source when referring to, adapting, or reusing any information from another source.</li>
					</ul>
				</div>
				<div className="font-open-sans text-black lg:text-lg mt-5 lg:text-justify lg:leading-10 leading-7 h-fit lg:hidden inline-block">
					You can improve research reproducibility with proper citation practices. Always cite your sources. Citation is required in several instances.
					<br /><br />
					<b >Follow these guidelines:</b><br /><br />
					<ul className="list-disc">
						<li>Direct quotation: Place verbatim text from another source in quotation marks. Indent text for longer quotes. Include a citation to the original source.</li><br />
						<li>Paraphrase or summary: Include a citation when restating or summarizing information from another source, including ideas, processes, arguments, or conclusions.</li><br />
						<li>Data, research results, information, graphics, or tables: Cite the original source when referring to, adapting, or reusing any information from another source.</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
