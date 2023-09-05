import { useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Project({ data }) {

  const[mainImg, setMainImg] = useState(0)
  const images = [
    "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ]
  // max 5 zdjęć
    const { id } = useParams();
    return (
      <div className="py-[20px] px-[50px] flex justify-center gap-4">
        {
          data.map((item) => {
            if (item.id !== Number(id)) return null;
             return (
              <div className="flex gap-2 flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-normal" key={item.id}>
                <div className="flex-1 flex flex-row flex-wrap lg:flex-col lg:items-start items-center justify-center lg:justify-normal">
                  {images.map((img, index) => {
                    return (
                      <img src={img} alt="" onClick={e=>setMainImg(index)} className='lg:w-[150px] lg:h-[150px] w-[75px] h-[75px] object-cover m-[10px]' key={index}/>
                    )
                  })}
                </div>
                <div className="flex-[3_3_0%] flex item-center justify-center">
                  <img src={images[mainImg]} alt="" className='max-h-[800px] object-conatin'/>
                </div>
                <div className="flex-1 flex flex-col gap-2 bg-black bg-opacity-50 lg:text-base text-sm h-fit p-5">
                  <h1 className=''>{data[id-1].title}</h1>
                  <p>
                    {data[id-1].description}
                  </p>
                  <div className="info">
                    <span>Id: {data[id-1].id}</span>
                    <br/>
                    <span>Technologies used: {data[id-1].technologies}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
        
      </div>
    )}
