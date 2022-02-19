import { useState } from 'react';
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "./styles";

type DashboardLayoutProps = {
  children: React.ReactNode
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDrawer = () => setIsOpened(prev => !prev);

  return (
    <Container>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Content>
        <Sidebar isOpened={isOpened} />
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </Container>
  )
};

export default DashboardLayout;
