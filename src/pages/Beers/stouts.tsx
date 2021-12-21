import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeerData } from "../../hooks/useBeerData";
import { Beer } from "../../types/Beer";

const StoutsBeerPage: NextPage = () => {
  const name = 'stouts';
  const { data, error } = useBeerData(name);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <h1>{name}</h1>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard key={`${name}-beer-list-${beerData.id}`} beerData={beerData} />
          )
        })}
      </main>
    </div>
  )
}

export default StoutsBeerPage;