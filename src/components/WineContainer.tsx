import styled from "@emotion/styled";
import { Error, Loading, WineCard } from ".";
import { MEDIA_QUERY_END_POINT } from "../constants";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";

interface WineContainerProps {
  name: string
}

export const WineContainer = ({ name }: WineContainerProps) => {
  const { data, error } = useWineData(name)
  
  if(error) return <Error />
  if(!data) return <Loading />
  
  return (
    <div>
      <WineTitle>{name} wine</WineTitle>
      <WineCardContainer>
        {data.map((wineData: Wine) => {
          return (
            <WineCard 
              key={`${name}-wine-list-${wineData.id}`} 
              wineData={wineData}
            />
          )
        })}
      </WineCardContainer>
    </div>
  )
}

const WineTitle = styled.h1`
  line-height: 180%;
  border-bottom: 1px solid #eee;
`

const WineCardContainer = styled.main`
  display: grid;
  gap: 1em;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`


// 여기다 와인들 폴더에 공통된 코드들 추상화 시키기 수정 해,,,,, 등에 땀이 너무 난다... 