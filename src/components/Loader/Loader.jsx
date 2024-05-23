import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  const style = {
    textAlign: "center",
  };
  return (
    <div style={style}>
      <ColorRing
        visible={true}
        height="15"
        width="15"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["black"]}
      />
    </div>
  );
};

export default Loader;
