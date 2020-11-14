import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h4`
  text-align: center;
  margin-top: 20px;
`

export const DateContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const DateString = styled.p`
  margin: 0;
`

export const SubDate = styled.p`
  margin: 0;
  font-size: 0.75em;
  margin-right: 20px;
  text-align: right;
`

export const TodoContainer = styled.div`
  h4 {
    margin: 0px;
    margin-bottom: 10px;
  }
`

export const EntriesContainer = styled.div`
  width: 100%;

  h4 {
    margin: 0px;
    margin-bottom: 10px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: calc(100vw - 40px);
  margin-top: 10px;
  transition: all 0.4s ease;

  @media (min-width: 850px) {
    width: 84vw;
    margin-left: 12vw;
  }

  @media (max-width: 650px) {
    flex-direction: column-reverse;
    width: 370px;
  }
`