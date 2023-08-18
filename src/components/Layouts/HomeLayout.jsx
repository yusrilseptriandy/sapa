import Leftbar from "../Fragments/Leftbar";
import Middle from "../Fragments/Middle/index.jsx";
import RightBar from "../Fragments/RightBar";

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <div className="main-layout min-h-screen grid grid-cols-12">
      <Leftbar />
      <Middle>{children}</Middle>
      <RightBar />
    </div>
  );
};

export default HomeLayout;
