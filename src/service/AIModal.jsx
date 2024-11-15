import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : Las Vegas, for 3 days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotels\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"hotelImageUrl\": \"https://www.thedlv.com/images/gallery/the-d-exterior-day.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1699,\n        \"longitude\": -115.1421\n      },\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street, offering a casino, restaurants, and a rooftop pool.\"\n    },\n    {\n      \"hotelName\": \"The Golden Nugget\",\n      \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$70 - $150 per night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/wp-content/uploads/2022/03/GN_Hero_Image_01-1.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1698,\n        \"longitude\": -115.1417\n      },\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a vibrant casino, multiple dining options, and a world-famous shark tank.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/content/dam/circuscircus/images/hotel-overview/circus-circus-hotel-exterior.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1098,\n        \"longitude\": -115.1726\n      },\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a circus theme, a large casino, amusement park rides, and a variety of restaurants.\"\n    },\n    {\n      \"hotelName\": \"Main Street Station Casino, Brewery & Hotel\",\n      \"hotelAddress\": \"200 N Main St, Las Vegas, NV 89101\",\n      \"price\": \"$60 - $120 per night\",\n      \"hotelImageUrl\": \"https://www.mainstreetstationcasino.com/images/site/gallery/slider/main-street-station-exterior.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1715,\n        \"longitude\": -115.1384\n      },\n      \"rating\": 4.0,\n      \"description\": \"A unique hotel with a train station theme, a casino, a brewery, and several dining options.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"bestTime\": \"Morning\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A vibrant pedestrian mall with live music, street performers, and a canopy of lights.\",\n          \"placeImageUrl\": \"https://www.fremontstreet.com/media/images/freemont-street-experience-canopy-night.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1699,\n            \"longitude\": -115.1422\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"2 hours\"\n        },\n        {\n          \"placeName\": \"Neon Museum\",\n          \"placeDetails\": \"A museum showcasing historic neon signs from Las Vegas.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/sites/default/files/styles/large/public/2023-08/NeonMuseum-LasVegas-2023-08-30_DSCF1485.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1746,\n            \"longitude\": -115.1421\n          },\n          \"ticketPricing\": \"$25\",\n          \"rating\": 4.0,\n          \"time\": \"1 hour\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"bestTime\": \"Day\",\n      \"plan\": [\n        {\n          \"placeName\": \"Hoover Dam\",\n          \"placeDetails\": \"A historic dam on the Colorado River, offering tours and breathtaking views.\",\n          \"placeImageUrl\": \"https://www.nps.gov/hdam/learn/nature/images/hoover-dam-from-mike-o-callghan-patrick-trail.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0017,\n            \"longitude\": -114.9987\n          },\n          \"ticketPricing\": \"$30\",\n          \"rating\": 4.5,\n          \"time\": \"4 hours\"\n        },\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A scenic area with red sandstone cliffs, hiking trails, and scenic drives.\",\n          \"placeImageUrl\": \"https://www.nps.gov/redr/learn/nature/images/red-rock-canyon-panorama.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1350,\n            \"longitude\": -115.2486\n          },\n          \"ticketPricing\": \"$15\",\n          \"rating\": 4.0,\n          \"time\": \"2 hours\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"bestTime\": \"Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"The famous Las Vegas Boulevard, lined with casinos, hotels, and entertainment venues.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_image/public/images/hero_images/las-vegas-strip-night.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1146,\n            \"longitude\": -115.1729\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 5.0,\n          \"time\": \"3 hours\"\n        },\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A free botanical garden with stunning flower displays and seasonal themes.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/hero-images/conservatory/hero-conservatory-botanical-garden.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1166,\n            \"longitude\": -115.1745\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"1 hour\"\n        }\n      ]\n    }\n  }\n}\n```\n\n**Explanation:**\n\n* **Hotels:** This section provides a list of budget-friendly hotels in Las Vegas, including their name, address, price range, image URL, coordinates, rating, and a brief description.\n* **Itinerary:** This section outlines a possible 3-day itinerary for a couple with a cheap budget.\n    * **Day 1:** Explores the historic downtown area with visits to Fremont Street Experience and the Neon Museum.\n    * **Day 2:** Features day trips to Hoover Dam and Red Rock Canyon National Conservation Area, both offering outdoor activities and scenic beauty.\n    * **Day 3:** Focuses on experiencing The Strip, including a visit to the Bellagio Conservatory & Botanical Garden.\n* **Place Details:** Each location includes details like:\n    * **placeName:** The name of the attraction.\n    * **placeDetails:** A brief description of the place.\n    * **placeImageUrl:** A URL to an image of the location.\n    * **geoCoordinates:** Latitude and longitude for location finding.\n    * **ticketPricing:** Information about admission fees.\n    * **rating:** A general rating based on popular reviews.\n    * **time:** An estimated time to spend at each location.\n\n**Notes:**\n\n* This is just a suggested itinerary, and you can customize it based on your interests and preferences.\n* Be sure to check the current prices and operating hours for attractions before your trip.\n* You can find many cheap dining options in Las Vegas, such as buffets, food trucks, and casual restaurants.\n* Take advantage of free activities and attractions, such as walking the Strip, exploring the casinos, and enjoying the public art.\n* Las Vegas is a great city for walking, but consider using public transportation or ride-sharing services to save money."},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
    