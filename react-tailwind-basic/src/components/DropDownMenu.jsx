import React, { useState } from "react";

export default function DropDownMenu() {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Ahmedabad"] },
    { name: "Russia", value: "RUS", cities: ["Moscow", "Yakutia"] },
    { name: "Japan", value: "JN", cities: ["Tokyo", "Kyoto"] },
  ];

  const [country, setCountry] = useState(null); 
  const [city, setCity] = useState(""); 

  const handleCountryChange = (e) => {
    const selectedCountry = countries[e.target.value]; 
    setCountry(selectedCountry);
    setCity("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bgGrid">
      <div className="flex flex-col">
        {/* First dropdown: Select country */}
        <select onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map((item, index) => (
            <option value={index} key={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!country}
        >
          <option value="">Select City</option>
          {country &&
            country.cities.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
