import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "./styles";

type DashboardLayoutProps = {
  children: React.ReactNode
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => (
  <Container>
    <Header />
    <Content>
      <Sidebar />
      <PageContainer>{children}</PageContainer>
    </Content>
    <Footer />
  </Container>
);

export default DashboardLayout;
