import { title } from "@/components/primitives";
import Image from "next/image";
import keynote1 from "styles/keynote1.png";
import keynote2 from "styles/keynote2.png.jpg";
export default function Keynote() {
  return (
    <div className="pt-12 pb-16 px-32 h-fit bg-white">
      <h1 className="text-black inter-custom-bolder text-[22px] flex justify-center">
        KEYNOTE SPEAKERS
      </h1>

      <div className="w-full h-screen  mt-28 flex justify-between">
        <div className="w-[40%] h-full p-3">
          <div className=" h-2/6 w-full ">
            <Image src={keynote1} alt="P suresh Varma" className=" rounded rounded-lg" priority/>
          </div>
          <div className="h-4/6 w-full ">
            <div className="h-2/6 w-full mt-4 flex flex-col items-center justify-center text-black">
              <p className="text-xl"><b>Prof. P Suresh Varma</b></p>
              <p className="font-semibold">M.Tech(CSE), Ph.D</p>
              <p className="font-semibold">Dean Faculty of Engineering and Technology </p>
              <p className="font-semibold">Aadikavi Nannaya University</p>
            </div>
            <div className="">
              <p className="font-open-sans text-black text-justify">
            Prof P. Suresh Varma presently serving as Dean Academic Affairs and he served as Vice Chancellor(FAC) and Rector, Aadikavi Nannaya University. A senior most Professor in the University, currently holds the position of Dean Faculty of Engineering and Technology. Apart from being an eminent scholar in Computer science and Engineering, he has also served the university in other capacities, which include, Executive Council Member, Senate Member, Dean College Development Council, Dean IT, Dean Faculty of Engineering and Technology and Chairman Board of Studies in Computer science & Engineering Department, Aadikavi Nannaya university.
            </p></div>
          </div>
        </div>
        <div className="w-[40%] h-full p-3">
        <div className=" h-2/6 w-full flex justify-center items-center ">
            <Image src={keynote2} alt="Jagan Mohan Chevvakula" className=" rounded rounded-lg" priority/>
          </div>
          <div className="h-fit w-full mt-14 ">
            <div className="h-2/6 w-full mt-4 flex flex-col items-center justify-center text-black">
              <p className="text-xl"><b>Prof. Jagan Mohan Chevvakula</b></p>
              <p className="font-semibold">Industry Expert</p>
              <p className="font-semibold">Director – R&D - Development at E2Open</p>
            </div>
            <div className="mt-6">
              <p className="font-open-sans text-black text-justify">
              Served at Different levels in various companies - Director – R&D - Development at E2Open(Present), NGA HR Pvt Limited, Hyderabad, HCL Technologies, Chennai, Dell International Services Pvt. Ltd, Hyderabad, Arsin Systems Pvt. Ltd., Hyderabad, Infotech Enterprises Ltd., Hyderabad, Quant  Systems Pvt. Ltd., Visakhapatnam. <br/><br/>
              Certified in PMP  Certification from PMI, USA, Certified Test Manager (CTM) from IIST, Certified  Internal Auditor for ISO 9001:2000, BS7799, Situational Leadership Certification from KenBlanchard. <br/><br/>
              Recevied awards in - Recipient of Q1 FY10 Team Award for outstanding commitment and contribution to the delivery of EMEA ARB project, Received Technology Award in Q3 2009 for outstanding contribution in Automation.<br/><br/>
            </p></div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
