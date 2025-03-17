import Image from "next/image";
import styles from "./solutions.module.css";
import solutions_1 from "../../../../public/assets/solutions-1.jpg";
import solutions_2 from "../../../../public/assets/solutions-2.jpg";
import solutions_3 from "../../../../public/assets/solutions-3.jpg";


let {
  solutions_wrapper,
  solutions,
  solutions_text,
  solutions_images,
  solutions_image,
  solutions_image_1,
  solutions_image_2,
  solutions_image_3
} = styles;

const Solutions = () => {
  return (
    <section className={`section-padding ${solutions_wrapper}`}>
      <div className={solutions}>
        <div className={solutions_text}>
          <h2 className={`text-40 all-caps-heading ${solutions_text}`}> Our Enterprise Solutions </h2>
          <p className="text-20">SifaCore Technology LLC is a SMB providing innovative technology solutions and Capital Investment to government and commercial entities. In building the company of the future, we have a vast resource of technology professionals and consultants who are dedicated to providing innovative and tailored IT, Telecommunications and Web Design solutions to an extensive array of industries.</p>
        </div>
        <div className={`${solutions_images}`}>
          <div className={`${solutions_image_1} ${solutions_image}`}>
            <Image src={solutions_1} alt="" fill={true} objectFit="cover" />
          </div>
          <div className={`${solutions_image_2} ${solutions_image}`}>
            <Image src={solutions_2} alt="" fill={true} objectFit="cover" />
          </div>
          <div className={`${solutions_image_3} ${solutions_image}`}>
            <Image src={solutions_3} alt="" fill={true} objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions;
