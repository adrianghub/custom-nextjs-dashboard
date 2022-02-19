import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #000130;
  background-color: #fafafa;
  `;

  export const Content = styled.div`
    display: flex;
    flex: 1;
  `;

  export const PageContainer = styled.div`
    padding: 20px;
    width: 80vw;

    @media (min-width: 768px) {
      margin-left: auto;
    } 
  `;