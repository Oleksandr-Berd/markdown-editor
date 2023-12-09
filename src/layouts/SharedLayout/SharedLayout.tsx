import Header from "../Header/Header";

type Props = {
  children: React.ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default SharedLayout;
