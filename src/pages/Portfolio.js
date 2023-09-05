import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'

const API_PROJECTS_URL = 'http://localhost:3001/api/data-projects';

export default function Portfolio() {

  const API_URL = process.env.REACT_APP_API_URL;

  let { dataProjectsAPI } = useLoaderData().results;
  dataProjectsAPI = dataProjectsAPI.data;
  console.log(dataProjectsAPI)
    return (
          <div>
              <div className='w-100 min-h-screen flex flex-wrap flex-col items-center
              justify-center max-w-7xl mx-auto'>
                <h1 className='nonAbsoluteTitle text-center'>
                  My Projects
                </h1>
                <h1 className='nonAbsoluteTitle text-center text-lg'>
                  (click on project for more info)
                </h1>
                <div className='flex flex-wrap items-center justify-center'>
                  {dataProjectsAPI.map((project) => {
                    return (
                      <Link to={`/project/${project.id}`} key={project.id}>
                        <div className='w-[350px] min-h-[350px] m-5 p-7 bg-black bg-opacity-50 opacity-90 transition hover:opacity-100 rounded-md flex flex-col justify-center items-center cursor-pointer' key={project.id} >
                            <img
                              className='object-cover rounded-lg'
                              src={`${API_URL}${project.attributes.imgsNew.data[0].attributes.formats.medium.url}`}
                              alt=""
                            />
                            <h1 className='decoration-1 font-light lg:text-2xl text-xl underline underline-offset-2 tracking-[6px]'>{project.attributes.title}</h1>  
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
          </div>
    )
}
