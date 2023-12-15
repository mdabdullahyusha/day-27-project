import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinsDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  //   console.log(id);
  return (
    <>
      <div className="container w-6/12 mx-auto">
        <div className="rounded bg-slate-50 p-4">
          <div className="flex items-center gap-6">
            <img src={data.url} className="w-12 flex-1" alt="" />
            <div className="flex-1">
              <h3 className="text-2xl text-slate-950">{data.title}</h3>
              <p className="text-slate-800">BTC</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinsDetails;
