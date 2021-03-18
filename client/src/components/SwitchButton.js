import { useState } from 'react';
import styled from 'styled-components';

export default function SwitchButton() {

    const [toggle, setToggle] = useState(false);

    const triggerToggle= () => {
        setToggle(!toggle)
    }


    return(
        <WRGToggle >
            <WRGToggleContainer>
                <WRGToggleCheck className={toggle ? 'wrg-toggle--checked' : ''}>
                    <span></span>
                </WRGToggleCheck>
                <WRGToggleUnCheck className={toggle ? 'wrg-toggle--checked' : ''}>
                    <span></span>
                </WRGToggleUnCheck>
            </WRGToggleContainer>
            <WRGToggleCircle className={toggle ? 'wrg-toggle--checked' : ''}/>
            <WRGToggleInput type="checkbox"/>
        </WRGToggle>
    )
}


const WRGToggle = styled.div`
touch-action: pan-x;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

`

const WRGToggleContainer = styled.div`
width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #4d4d4d;
  transition: all .2s ease;
`

const WRGToggleCheck = styled.div`
position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  opacity: 0;
  transition: opacity .25s ease;
  left: 8px;

  span{
    align-items: center;
  display: flex;
  height: 10px;
  justify-content: center;
  position: relative;
  width: 10px;
  }

  &.wrg-toggle--checked{
      opacity: 1;
  }

`

const WRGToggleUnCheck = styled.div`
position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  opacity: 0;
  transition: opacity .25s ease;
  opacity: 1;
  right: 10px;

  span{
    align-items: center;
  display: flex;
  height: 10px;
  justify-content: center;
  position: relative;
  width: 10px;
  }

  &.wrg-toggle--checked{
      opacity: 0;
  }

`

const WRGToggleCircle = styled.div`
transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid #4d4d4d;
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all .25s ease;

  &.wrg-toggle--checked{
    left: 27px
  }

`

const WRGToggleInput = styled.button`
border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  xoverflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`