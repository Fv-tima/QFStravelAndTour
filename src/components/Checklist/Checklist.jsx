import React from 'react'
import { ChecklistContainer, ChecklistContent
 } from './Checklist.styled'

export default function Checklist() {
  return (
    <ChecklistContainer>
        <ChecklistContent>
            <h1>Study Abroad Programs Requirements Checklist</h1>
            <ul>
                <li>Completed application form</li>
                <li>Official transcripts from all previous schools attended</li>
                <li>Letters of recommendation from professors or employers</li>
                <li>Statement of purpose or personal essay</li>
                <li>Language proficiency test scores(if required)</li>
                <li>Proof of financial support or funding for the program</li>
                <li>Health and meical information, including vaccination records</li>
               <li>Copy of passport</li> 
            </ul>
        </ChecklistContent>
        <ChecklistContent>
          <h1>Visa Support Document Checklist</h1>
          <ul>
            <li>Valid passport</li>
            <li>Visa application form</li>
            <li>Passport-sized photos</li>
            <li>Acceptance letter from the educational institution or program</li>
            <li>Proof of financial support or funding for the program</li>
            <li>Travel itinery</li>
            <li>Health and meical information, including vaccination records</li>
            <li>Language proficiency test scores(if required)</li>
            <li>Other supportind documents are required by the embassy or consulate</li>
          </ul>
        </ChecklistContent>
    </ChecklistContainer>
  )
}
