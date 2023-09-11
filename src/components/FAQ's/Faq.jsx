import React, { useState } from 'react'
import { FaQBucket, MotherVolume} from './Faq.styled';
import './style.css'


export default function Faq () {
  const [selected, setSelected] = useState(null)
  const [newSelected, setNewSelected] = useState(null)

  const toggle = i => {
    selected === i ? setSelected(null) : setSelected(i)
  }
  const newToggle = i => {
    newSelected === i ? setNewSelected(null) : setNewSelected(i)
  }



  return (
    <FaQBucket>
      <h1>Frequently Asked Questions</h1>
      <p id='comment'>Have any questions about our servicesor need help planning your next vacation or study abroad experience?. Here are some of the most Frequently asked questions we receive: </p>
      <MotherVolume>
        <div className='accordion'>
          { data.map( ( item, i ) => (
            <div key={ item.question } className='item'>
              <div className='title'>
                <h2> { item.question } </h2>
                <span> <h4 onClick={ () => toggle( i ) }>{ selected == i ? <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Frame 1000003469">
                    <g id="Group 36810">
                      <rect id="Rectangle 4266" y="0.25" width="41.5" height="41.5" rx="8" fill="#077FDE" />
                      <path id="Vector" d="M13 19.1C12.3649 19.1 11.85 19.6149 11.85 20.25C11.85 20.8851 12.3649 21.4 13 21.4H29C29.6351 21.4 30.15 20.8851 30.15 20.25C30.15 19.6149 29.6351 19.1 29 19.1H13Z" fill="white" stroke="white" stroke-width="0.3" stroke-linecap="round" />
                    </g>
                  </g>
                </svg> : <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Frame 1000003469">
                    <g id="Group 36813">
                      <rect id="Rectangle 4268" x="0.5" y="0.25" width="41.5" height="41.5" rx="8" fill="#F7F7FF" />
                      <g id="Group 36811">
                        <path id="Vector" d="M21.25 11.85C20.6149 11.85 20.1 12.3649 20.1 13V29C20.1 29.6351 20.6149 30.15 21.25 30.15C21.8851 30.15 22.4 29.6351 22.4 29V13C22.4 12.3649 21.8851 11.85 21.25 11.85Z" fill="#6F6C90" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                        <path id="Vector_2" d="M13.25 19.85C12.6149 19.85 12.1 20.3649 12.1 21C12.1 21.6351 12.6149 22.15 13.25 22.15H29.25C29.8851 22.15 30.4 21.6351 30.4 21C30.4 20.3649 29.8851 19.85 29.25 19.85H13.25Z" fill="#6F6C90" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                      </g>
                    </g>
                  </g>
                </svg> }</h4></span>
              </div>
              <div className={ selected == i ? 'content show' : 'content' }>
                <h6>{ item.answer}</h6>
              </div>
            </div>

          ))}
        </div>


        
          <div className='accordion'>
            { secondData.map( ( item,i ) => (
              <div key={item.question} className='item'>
                <div className='nextt'>
                  <h2> { item.question } </h2>
                  <span><h4 onClick={ () => newToggle( i ) }>{ newSelected == i ? <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 1000003469">
                      <g id="Group 36810">
                        <rect id="Rectangle 4266" y="0.25" width="41.5" height="41.5" rx="8" fill="#077FDE" />
                        <path id="Vector" d="M13 19.1C12.3649 19.1 11.85 19.6149 11.85 20.25C11.85 20.8851 12.3649 21.4 13 21.4H29C29.6351 21.4 30.15 20.8851 30.15 20.25C30.15 19.6149 29.6351 19.1 29 19.1H13Z" fill="white" stroke="white" stroke-width="0.3" stroke-linecap="round" />
                      </g>
                    </g>
                  </svg> : <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 1000003469">
                      <g id="Group 36813">
                        <rect id="Rectangle 4268" x="0.5" y="0.25" width="41.5" height="41.5" rx="8" fill="#F7F7FF" />
                        <g id="Group 36811">
                          <path id="Vector" d="M21.25 11.85C20.6149 11.85 20.1 12.3649 20.1 13V29C20.1 29.6351 20.6149 30.15 21.25 30.15C21.8851 30.15 22.4 29.6351 22.4 29V13C22.4 12.3649 21.8851 11.85 21.25 11.85Z" fill="#6F6C90" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                          <path id="Vector_2" d="M13.25 19.85C12.6149 19.85 12.1 20.3649 12.1 21C12.1 21.6351 12.6149 22.15 13.25 22.15H29.25C29.8851 22.15 30.4 21.6351 30.4 21C30.4 20.3649 29.8851 19.85 29.25 19.85H13.25Z" fill="#6F6C90" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                        </g>
                      </g>
                    </g>
                  </svg> }</h4></span>
                </div>
                <div className={ newSelected == i ? 'another-content showNext' : 'another-content' }>
                  <h6>{ item.answer }</h6>
                </div>
              </div>

            ) ) }
          </div>
        
      </MotherVolume>
      <div className='down-below'>
        <p id='comment-below'>Have more questions? Contact us today to learn more about our services and how we can help you your next adventure. </p>
      </div>
      
       </FaQBucket>
)}

const data = [
  {
    question: 'What types of tour packages do you offer?',
    answer: `we offer a wide range of tour packages to
     destinations around the world, including Canada, the 
     UK, Australia, and the USA. Our packages are designed to cater to all types of travelers, whether you're looking for a relaxing beach vacation, an adventurous trek throught the mountains, or a cultural tour of a new city.`
  },
  {
    question: 'How do I apply for a study abroad program?',
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum quasi corporis optio vitae, quod assumenda error magni debitis, tenetur tempore perspiciatis numquam deleniti earum? Voluptatum hic dolores at sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum nulla deleniti tempore dignissimos earum, corporis magni, ducimus aut animi minima temporibus doloribus modi cupiditate eum necessitatibus dicta hic ad!"
  },
  {
    question: 'Do you offer scholarships or funding options for study abroad programs?',
    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum quasi corporis optio vitae, quod assumenda error magni debitis, tenetur tempore perspiciatis numquam deleniti earum? Voluptatum hic dolores at sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum nulla deleniti tempore dignissimos earum, corporis magni, ducimus aut animi minima temporibus doloribus modi cupiditate eum necessitatibus dicta hic ad!'
  }
]

const secondData = [
  {
    question: 'What kind of support do you offer for study abroad students?',
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum quasi corporis optio vitae, quod assumenda error magni debitis, tenetur tempore perspiciatis numquam deleniti earum? Voluptatum hic dolores at sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum nulla deleniti tempore dignissimos earum, corporis magni, ducimus aut animi minima temporibus doloribus modi cupiditate eum necessitatibus dicta hic ad! "
  },
  {
    question: 'How do I book a tour package or study abroad program?',
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum quasi corporis optio vitae, quod assumenda error magni debitis, tenetur tempore perspiciatis numquam deleniti earum? Voluptatum hic dolores at sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum nulla deleniti tempore dignissimos earum, corporis magni, ducimus aut animi minima temporibus doloribus modi cupiditate eum necessitatibus dicta hic ad!"
  },
]