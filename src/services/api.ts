
import axios from "axios";



export const fetchPrayData = async () => {
  const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity/06-06-2024?city=cairo&country=egypt&method=8`).then((res)=> res.data.data).catch((error) => console.log(error))
  return response
};

