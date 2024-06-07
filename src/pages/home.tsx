import { useEffect, useState } from "react";

import { fetchPrayData } from "../services/api"
import Prayers from "../components/prayers";

const Home = ()=>{



    const [data, setData] = useState([]);
    const [timings, setTimings] = useState([])

    useEffect(() => {
    const getPrayers = async () => {
      const data = await fetchPrayData();
      setData(data);
      setTimings(data.timings)
    };
    getPrayers();
  }, []);















    return(
        <div>
            <h1>Home</h1>

                <Prayers data={timings} />
                
            <hr />
            <pre dir="ltr">
                {JSON.stringify(data, null, 4)}
            </pre>
        </div>
    )
}



export default Home;