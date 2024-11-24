/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GetPlaceDetails } from "@/service/GlobalApi";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

const InfoSection = ({ trip }) => {

  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip&&GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data);

    //   const PhotoUrl = PHOTO_REF_URL.replace(
    //     "{NAME}",
    //     resp.data.places[0].photos[3].name
    //   );
    //   setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <div>
      <img
        className="h-[340px] w-full object-cover rounded-xl"
        src={"/background.jpg"}
        alt="Trip Image"
      />
      <div className="my-5 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">🗺️ {trip?.userSelection?.location?.label}</h2>
        
        <div className="flex justify-between items-center">
            <div className="flex gap-5">
                <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">📅 Duration: {trip?.userSelection?.noOfDays} Day/s</h2>
                <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">💰 Budget: {trip?.userSelection?.budget} Budget</h2>
                <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">👥 Traveling with: {trip?.userSelection?.traveler}</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
