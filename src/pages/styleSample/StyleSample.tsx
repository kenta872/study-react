import "./StyleSample.css";
import style from "./StyleSample.module.css";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 32px;
`;

const StyleSample = () => {
  return (
    <div className="parentSample">
      <button type="button" className={`sampleButton ${style.commonButton}`}>
        SampleButton
      </button>
      <StyledButton>サンプルボタンB</StyledButton>
    </div>
  );
};

export default StyleSample;
