import styled, { css } from 'styled-components'

const Button = styled.div`
  font-size:16px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  //mobile size
  @media (max-width: 700px) {
    font-size: 12px;
  }
  width: 110px;

  //light theme
  ${(p) =>
    p.light
      ? css`
          background-color: #fff;
          border: 1px solid #c5c7ca;
          color: #17293f;
        `
      : css`
          background-color: #17293f;
          border: 1px solid white;
          color: #fff;
        `}

  //hover transition for transform and background-color
&:hover {
    transition: width 0.3s;
    @media (max-width: 700px) {
      width: 90px;
    }
    cursor: pointer;
    text-decoration: none;
    border: 2px solid #fff;
    ${(p) =>
      p.light
        ? css`
            background-color: #17293f;
            border: 1px solid white;
            color: #fff;
            transition: background-color 0.2s linear;
          `
        : css``}
  }
  ${(p) =>
    p.contact
      ? css`
          margin-bottom: 20px;
        `
      : css``}
`
export default Button
