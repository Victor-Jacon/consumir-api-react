// EVitar o uso de else
const accessory = (weather) => {
    if (weather == "rain") {
      return "umbrella";
    } else {
      return "sunglass";
    }
  };
  
  console.log(accessory("rain"));
  
  const accessory = (weather) => {
    if (weather == "rain") {
      return "umbrella";
    }
    return "sunglass";
  };
  
  console.log(accessory("rain"));