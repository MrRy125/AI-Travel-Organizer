/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GetPlaceDetails";

const HotelCardItem = ({ hotel }) => {

    const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.userSelection?.location?.label,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel?.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer mt-5">
        <img src={"/background.jpg"} className="rounded-xl" />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium ">{hotel.hotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel.hotelAddress}</h2>
          <h2 className="text-sm">💰 {hotel.price}</h2>
          <h2 className="text-sm">⭐ {hotel.rating}</h2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCardItem;
