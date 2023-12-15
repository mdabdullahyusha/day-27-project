import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <Link to={`/coinDetails/${props.id}`}>
        <div className="rounded bg-slate-50 p-4">
          <div className="flex items-center gap-6">
            <img src={props.image} className="w-12 flex-1" alt="" />
            <div className="flex-1">
              <h3 className="text-2xl text-slate-950">{props.name}</h3>
              <p className="text-slate-800">BTC</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
