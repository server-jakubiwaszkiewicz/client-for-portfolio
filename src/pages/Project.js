import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

export default function Project() {

  let { dataProjectsAPI } = useLoaderData().results;

  const { id } = useParams();
  const[mainImg, setMainImg] = useState(0)

  const dataID = Number(id)-1
  const projectsData = dataProjectsAPI.data[dataID]
  let arr=[]
  for (let i = 0; i < dataProjectsAPI.data[Number(id)-1].attributes.images.data.length; i++) {
    let url = dataProjectsAPI.data[Number(id)-1].attributes.images.data[i].attributes.formats.medium.url
    arr.push(`${API_URL}${url}`)
  }
  // max 5 zdjęć
    return (
      <div className="py-[20px] px-[50px] flex justify-center gap-4">
        <div className="flex gap-2 flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-normal">
          <div className="flex-1 flex flex-row flex-wrap lg:flex-col lg:items-start items-center justify-center lg:justify-normal">
            {arr.map((img, index) => {
              return (
                <img src={img} alt="" onClick={e=>setMainImg(index)} className='lg:w-[150px] lg:h-[150px] w-[75px] h-[75px] object-cover m-[10px]' key={index}/>
              )
            })}
          </div>
          <div className="flex-[3_3_0%] flex item-center justify-center">
            <img src={arr[mainImg]} alt="" className='max-h-[800px] object-conatin'/>
          </div>
          <div className="flex-1 flex flex-col gap-2 bg-black bg-opacity-50 lg:text-base text-sm h-fit p-5">
            <h1 className=''>{projectsData.attributes.title}</h1>
            <p>
              {projectsData.attributes.description}
            </p>
            <div className="info">
              <span>id: {projectsData.id}</span>
              <br/>
              <span>Technologies used: {projectsData.attributes.technologies}</span>
            </div>
          </div>
        </div>
      </div>
    )}
