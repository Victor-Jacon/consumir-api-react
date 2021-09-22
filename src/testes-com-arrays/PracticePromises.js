const apiRequest = async (data) => {
    return await Promise.resolve(data);
  };
  
(async () => {
console.log(1);
console.log(2);
console.log(3);

const apiData = await apiRequest("test");
console.log(apiData);

console.log(4);
console.log(5);
console.log(6);
console.log(7);
})()

// 2
const apiRequest = async (data) => {
    return await Promise.resolve(data);
  };
  
  const api2Request = async () => {
    throw new Error("apiRequest error");
  };
  
  (async () => {
    console.log(1);
    console.log(2);
    console.log(3);
  
    await Promise.all([apiRequest("test"), api2Request("test")])
      // .then((data) => console.error(data))
      // .catch((err) => console.error(err));
  
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
  })();
