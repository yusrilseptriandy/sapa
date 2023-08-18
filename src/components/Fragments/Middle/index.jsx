import Header from "./Header";
import MiddleContent from "./MiddleContent";

const Middle = (props) => {
  const { children } = props;
  return (
    <div className="layout-content col-span-6 border-l border-r">
      <Header titleLeft="Home" titleRight="Random" />
      <MiddleContent>{children}</MiddleContent>
    </div>
  );
};

export default Middle;
