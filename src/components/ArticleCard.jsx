import { HiLocationMarker } from "react-icons/hi";

const ArticleCard = ({
  id,
  img,
  title,
  country,
  dates,
  text,
  googleMapsLink,
}) => {
  return (
    <section className="flex justify-center items-center p-4 border-b-2  shadow-lg border-yellow-300 gap-4">
     
       <div className="  flex-1  ">
       <img 
       src={img.src}
       className="w-full h-98 object-cover"
       
       
       />

       </div>
       <div className="flex flex-col  flex-2 justify-center items-center gap-y-4 p-4 bg-blue-300 shadow-lg rounded-lg border-t-4 border-yellow-900">
<div className="flex items-center whitespace-nowrap gap-2">
       <HiLocationMarker className="w-6 h-6 text-red-500" />
       <h2 className="text-gray-600 tex-sm text-bold ml-2 shrink-0">{country}</h2>
       <a 
       href={googleMapsLink}
       target="_blank"
       className="text-blue-500 text-sm underline ml-2"
       >
View on Google Maps

       </a>

       </div>
       <h1 className="text-2xl font-bold text-gray-600">{title}</h1>
       <h2 className=""text-lg text-gray-600 font-bold>{dates}</h2>
       <p className="text-gray-900 tracking-wide font-semi-bold text-1xl">{text}</p>

   
      </div>
    </section>
  );
};
export default ArticleCard;
