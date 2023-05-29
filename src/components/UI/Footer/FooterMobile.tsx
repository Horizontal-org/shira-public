import { FunctionComponent, ReactNode, useState } from "react";
import styled from 'styled-components'
import { VscClose } from 'react-icons/vsc'
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useStore } from "../../../store";

interface Props {
  title?: string;
  hideCloseButton?: boolean;
  action?: ReactNode;
  handleIsExpanded?: (isExpanded: boolean) => void;
  isExpanded?: boolean;
}

export const FooterMobile: FunctionComponent<Props> = ({
  title,
  action,
  hideCloseButton,
  isExpanded,
  handleIsExpanded
}) => {
  const changeScene = useStore((state) => state.changeScene)

  const toggleDropdown = () => {
    handleIsExpanded(!isExpanded)
  }

  return (
    <Container>
      <Wrapper isExpanded={isExpanded} hideCloseButton={hideCloseButton}>
        {!hideCloseButton && (
          <LeftContent>
          <CloseButton onClick={() => { changeScene('welcome') }}>
            <VscClose size={24} color='#111' />
          </CloseButton>
          <Title>
            { title }
          </Title>
        </LeftContent>)
      }

        {hideCloseButton && (
          <ExpandedDropdown>
            {isExpanded && (
              <LeftContent>
                <CloseButton isExpanded={isExpanded} onClick={() => { changeScene('welcome') }}>
                  <VscClose size={24} color='#111' />
                </CloseButton>
                <div>Exit quiz</div>
              </LeftContent>
            )}
            <DropdownOpen onClick={toggleDropdown}>
              {isExpanded ? (
                <FiChevronDown size={24} color='#111' />
              ) : (
                <FiChevronUp size={24} color='#111' />
              )}
            </DropdownOpen>
          </ExpandedDropdown>
        )}
        {action}
      </Wrapper>
    </Container>
  )
}

interface WrapperProps {
  isExpanded: boolean;
  hideCloseButton?: boolean;
}

const Container = styled.div`
  position: relative;
  z-index: 99999;`

const Wrapper = styled.div<WrapperProps>`
  background: #fff;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  transition: bottom 0.3s ease;

  display: ${({ isExpanded }) => isExpanded ? 'block' : 'flex'}};
  ${({ hideCloseButton }) => hideCloseButton && `flex-direction: row-reverse;`}
  justify-content: space-between;
  align-items: center;
  height: ${({ isExpanded }) => isExpanded ? 'auto' : 'auto'};
  min-height: 86px;
  padding: ${({ isExpanded }) => isExpanded ? '8px 20px' : '8px'};

  box-shadow: 0px -6px 10px 4px rgba(0, 0, 0, 0.15), 0px -2px 3px rgba(0, 0, 0, 0.3);
  border-radius: 20px 20px 0px 0px;

  @media (max-width:  ${props => props.theme.breakpoints.sm}) {
    padding: 8px;
    padding-right: 16px;
  }

  @media (max-height: calc(100vh - 56px)) {
    position: sticky;
    /* Set a higher value if necessary to account for other elements on the page */
    bottom: 56px;
  }
`

const LeftContent = styled.div`
  display: flex;
  align-items: center;
`

const CloseButton = styled.div<{isExpanded?: boolean}>`
  width: 48px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: $fff;
  border-right: 1px solid ${props => props.isExpanded ? 'none' : props.theme.colors.dark.mediumGrey};
  margin-right: 16px;
`

const Title = styled.div`
  @media (max-width:  ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
  padding-left: 20px;
  color: black;
  font-size: 16px;
`

const ExpandedDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const DropdownOpen = styled.div`
  margin-right: 32px;
  cursor: pointer;
`

FooterMobile.defaultProps = {
  title: '',
  action: <></>
}