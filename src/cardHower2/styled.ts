import styled from "styled-components";

const Styles = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: #000;
  overflow: hidden;
  border-radius: 10px;
  box-sizing: border-box;

  & .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.5s;
    z-index: 1;
  }

  &:hover .icon {
    top: 20px;
    left: calc(50% - 40px);
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  & .content {
    position: absolute;
    height: calc(100% - 100px);
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    top: 100%;
    transition: 0.5s;
    color: #fff;
    opacity: 0;
  }

  .content h3 {
    font-size: 24px;
  }

  &:hover .content {
    top: 100px;
    opacity: 1;
  }

  /*
.content p {
  opacity: 0;
  transition: 0.5s;
  margin-top: 10px;
}

.box:hover p {
  opacity: 1;
  transition-delay: 0.5;
}

.box:hover .content {
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
} */
`;

export default Styles;
