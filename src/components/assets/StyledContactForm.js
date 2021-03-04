import styled, { css } from 'styled-components';
import './contact.scss';
import { MdClose } from 'react-icons/md';

const sharedStyles = css`
  background-color: #ccc;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  margin-top: 4vw;
  padding: 0 2%;
`;

const StyledForm = styled.form`
  width: 70%;
  padding: 1.75%;
  background-color: #eee;
  color: #3d5a80;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(250, 250, 250, 0.4);
`;
//  height:100%;
  // border-radius: 10px; (if we want a round form)

const StyledInput = styled.input`
  display: block;
  width: 100%;
  rows: 1;
  padding 1.5%;
  ${sharedStyles}
`;

const StyledTextAreaSubject = styled.textarea`
  background-color: #98c1d9;
  width: 100%;
  font-size:large;
  rows: 2;
  padding 1.5%;
  overflow: auto;
  spellcheck:true;
  resize: vertical;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #98c1d9;
  width: 100%;
  resize: vertical;
  rows: 2;
  padding 1.5%;
  font-size:large;
  overflow: auto;
  spellcheck:true;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #ee6c4d;
  color: #fff;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  height: 40%;
  padding: 0 10%;
  cursor: pointer;
  box-sizing: border-box;

  :hover {
		background-color: #3D5A80;
		cursor: pointer;
    opacity:0.7;
	}
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 5% 0;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 40%;
  height: 60%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 1em 2em ;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 2%;
  width: 5%;
  height: 5%;
  padding: 0;
  z-index: 10;
`;

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <Background>
      <ModalWrapper>
        <ModalContent>{children}</ModalContent>
        <CloseModalButton type="button" onClick={handleClose}></CloseModalButton>
      </ModalWrapper>
     </Background>
    </div>
  );
};

export default StyledFormWrapper;

export {
    StyledFormWrapper,
    StyledForm,
    sharedStyles,
    StyledInput,
    StyledTextArea,
    StyledButton,
    StyledError,
    StyledTextAreaSubject,
    Modal
};