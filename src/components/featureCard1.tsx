import styled from 'styled-components';
import { IoIosHappy } from "react-icons/io";

const Card1 = () => {
  return (
    <StyledWrapper>
      <div className="card">
         <IoIosHappy className='text-black text-7xl'/>
        <p className="cookieHeading">MoodoMeter</p>
        <p className="cookieDescription">Moodometer is a simple tool that lets users track and express their current emotions using emojis or mood indicators. It helps visualize mood patterns over time for better self-awareness and emotional well-being.</p>
        <div className="buttonContainer">
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: fit-content;
    background-color: rgb(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    justify-content: center;
    padding: 20px 30px;
    gap: 13px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 30px white;
  }

  #cookieSvg {
    width: 50px;
  }

  #cookieSvg g path {
    fill: rgb(97, 81, 81);
  }

  .cookieHeading {
    font-size: 1.2em;
    font-weight: 800;
    color: rgb(26, 26, 26);
  }

  .cookieDescription {
    text-align: center;
    font-size: 0.7em;
    font-weight: 600;
    color: rgb(99, 99, 99);
  }

  .buttonContainer {
    display: flex;
    gap: 20px;
    flex-direction: row;
  }

  .acceptButton {
    width: 120px;
    height: 30px;
    background-color: #7b57ff;
    transition-duration: .2s;
    border: none;
    color: rgb(241, 241, 241);
    cursor: pointer;
    font-weight: 600;
    border-radius: 20px;
  }

  .declineButton {
    width: 80px;
    height: 30px;
    background-color: rgb(218, 218, 218);
    transition-duration: .2s;
    color: rgb(46, 46, 46);
    border: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 20px;
  }

  .declineButton:hover {
    background-color: #ebebeb;
    transition-duration: .2s;
  }

  .acceptButton:hover {
    background-color: #9173ff;
    transition-duration: .2s;
  }`;

export default Card1;
