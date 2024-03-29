import { title } from "@/components/primitives";
import Image from "next/image";
import keynote1 from "styles/keynote1.png";
import keynote2 from "styles/keynote2.png.jpg";
export default function Keynote() {
  return (
    <div className="pt-16 pb-16 px-32 h-fit bg-white">
      <h1 className="text-black inter-custom-bolder text-[22px] flex justify-center">
        KEYNOTE SPEAKERS
      </h1>
      <div className="flex justify-between pt-28 ">
        <div className="flex flex-col w-[350px]">
          <div className="bg-[#E7E7E7] p-5">
            <Image
              src={keynote1}
              alt="keynote1 png"
              className="h-[250px] w-[350px]"
            />
          </div>
          <div className="text-black text-center pt-10">
            <p className="inter-custom-bolder">Prof. P Suresh Varma</p>
            <p className="inter-custom-light">M.Tech(CSE), Ph.D</p>
            <p className="inter-custom-bold">
              Dean Faculty of Engineering and Technology
            </p>
            <p className="inter-custom-bolder">Aadikavi Nannaya University</p>
          </div>
          <div className="flex pt-12">
            <p className="text-black inter text-center">
              Prof P. Suresh Varma presently serving as Dean Academic Affairs
              and he served as Vice Chancellor(FAC) and Rector, Aadikavi Nannaya
              University. A senior most Professor in the University, currently
              holds the position of Dean Faculty of Engineering and Technology.
              Apart from being an eminent scholar in Computer science and
              Engineering, he has also served the university in other
              capacities, which include, Executive Council Member, Senate
              Member, Dean College Development Council, Dean IT, Dean Faculty of
              Engineering and Technology and Chairman Board of Studies in
              Computer science & Engineering Department, Aadikavi Nannaya
              university.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#E7E7E7] p-5">
            <Image
              src={keynote2}
              alt="keynote2 png"
              className="h-[250px] w-[350px]"
            />
          </div>
          <div className="text-black text-center pt-10">
            <p className="inter-custom-bolder">Jagan Mohan Chevvakula</p>
            <p className="inter-custom-light">Industry Expert</p>
            <p className="inter-custom-bold">
              Director - R&D - Development at E2Open
            </p>
          </div>
          <div className="flex flex-col pt-12 ">
            <p className="text-black inter text-center">
              Served at Different levels in various companies - Director - R&D -
              Development at E2Open(Present), NGA HR Pvt Limited, Hyderabad, HCL
              Technologies, Chennai, Dell International Services Pvt. Ltd,
              Hyderabad, Arsin Systems Pvt. Ltd., Hyderabad, Infotech
              Enterprises Ltd., Hyderabad, Quant Systems Pvt. Ltd.,
              Visakhapatnam. Certified in PMP Certification from PMI, USA,
              Certified Test Manager (CTM) from IIST, Certified Internal Auditor
              for ISO 9001:2000, BS7799, Situational Leadership Certification
              from KenBlanchard. Recevied awards in - Recipient of Q1 FY10 Team
              Award for outstanding commitment and contribution to the delivery
              of EMEA ARB project, Received Technology Award in Q3 2009 for
              outstanding contribution in Automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
