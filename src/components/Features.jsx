import React from 'react'
import { iconAccesAnywere , iconSecurity , iconCollaboration , iconAnyFilefrom } from '../images'


const FeaturesData =[
  {
    id: 'f1',
    icon: iconAccesAnywere,
    name: "Acces your files, anywhere",
    description: "The ability to use a smartphone, tablet, or computer tp acces your account means your files follow you everywhere."
  },
  {
    id: 'f2',
    icon: iconSecurity,
    name: "Security you can trust",
    description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
  },
  {
    id: 'f3',
    icon: iconCollaboration,
    name: "Real-time collaboration",
    description: "Securely share files and folders with friends and colleagues for live collaboration. No email attachments required"
  },
  {
    id: 'f4',
    icon: iconAnyFilefrom,
    name: "Store any type of file",
    description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
  }
]
const Features = () => {
  return (
    <section className='flex justify-center items-centre w-[100vw] bg-primary py-[80px]'>
      <ul className='grid  ss:grid-cols-2 gap-x-[100px] ss:gap-y-[30px] gap-y-[60px] justify-evenly items-centre   '>
      {FeaturesData.map((feature)=>(
        <li key={feature.id} className='flex flex-col max-w-[300px] items-center '>
          <img src={feature.icon} alt={feature.icon} className='w-[70px] h-[70px] object-contain'/>
          <h3 className='text-white ss:text-[16px] text-[18px] font-[700] py-4'>{feature.name}</h3>
          <p className='text-white ss:text-[12px] text-[14px] font-[400]'>{feature.description}</p>
        </li>
      ))}
      </ul>
    </section>
  )
}

export default Features