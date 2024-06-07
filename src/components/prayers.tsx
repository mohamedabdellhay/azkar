type PrayerTimes = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
};


const Prayers = (data)=>{

    const entries = Object.entries(data.data);
    console.log(entries);

    const pray = entries.map(
        ([key, value]: [string, unknown], index: number): JSX.Element => <div key={index}>{key} : {value as string}</div>
    )

    return(
        <div>
            {pray}
            
        </div>
    )
}

export default Prayers;