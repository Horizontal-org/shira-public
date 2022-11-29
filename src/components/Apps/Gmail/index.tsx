import React, { FunctionComponent, useRef  } from "react"
import styled, { createGlobalStyle } from 'styled-components'
import { domToReact } from 'html-react-parser'

import Header from './Header'
import Sidebar from "./Sidebar"
import MailOptions from "./MailOptions"
import Applications from "./Applications"
// google font 
import '../../../fonts/GoogleSans/style.css'
import { Profile } from "./Profile"
import { Attachments } from "./Attachments"

interface Props {
  content: HTMLElement;
  senderName: string;
  senderEmail: string;
  subject?: string;
  attachments?: any[];
}

const Gmail: FunctionComponent<Props> = ({ 
  content,
  senderName,
  senderEmail,
  subject,
  attachments
}) => {

  return (
    <DesktopWrapper className="gmail">
      <Font />
      <div>
        <Header />
      </div>
      <Content>
        <Sidebar />
        <MiddleWrapper>
          <MailOptions />
          <DynamicWrapper>
            <div>
              <Subject>
                { subject || ''}
              </Subject>
              <Profile 
                senderEmail={senderEmail}
                senderName={senderName}
              />
              <PaddingLeft>
                <DynamicContent dangerouslySetInnerHTML={{__html: content.outerHTML}}></DynamicContent>
                {attachments.length > 0 && (
                  <Attachments
                    data={attachments}
                  />    
                )}
              </PaddingLeft>
            </div>
          </DynamicWrapper>
        </MiddleWrapper>
        <Applications />
      </Content>
    </DesktopWrapper>
  )
}

const Font = createGlobalStyle`
  .gmail {
    font-family: 'Product Sans Regular';
  }
`

const DesktopWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  display: flex;
`

const MiddleWrapper = styled.div`
  width: 100%;
`

const DynamicWrapper = styled.div`
  padding: 10px;
`

const Subject = styled.div`
  color: #1f1f1f;
  font-weight: 400;
  font-size: 1.375rem;
  padding: 8px 0 8px 53px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 8px 0 8px 8px;
  }

`

const DynamicContent = styled.div`
  padding: 10px 0;
`

const PaddingLeft = styled.div`
  padding-left: 53px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-left: 8px;
  }
`
export default Gmail