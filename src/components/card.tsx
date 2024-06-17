type CardProps = {
  flags: { svg: string; png: string };
  name: {
    common: string;
  };
  population: string;
  region: string;
  capital: string;
};

export const Card = ({ data }: { data: CardProps }) => (
  <div className="w-[280px] flex flex-col">
    <img className="h-[160px]" src={data?.flags.png} alt="Flag" />
    <h2>{data?.name.common}</h2>
    <p className="font-bold">
      Population: <span className="font-normal">{data?.population}</span>
    </p>
    <p className="font-bold">
      Region: <span className="font-normal">{data?.region}</span>
    </p>
    <p className="font-bold">
      Capital: <span className="font-normal">{data?.capital}</span>
    </p>
  </div>
);
