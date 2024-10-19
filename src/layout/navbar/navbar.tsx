import { Toolbar } from "primereact/toolbar";
import covidLogo from "../../assets/icons/covid-logo.png";

const Navbar = () => {
  const startContent = (
    <div className="pl-5 flex gap-2 align-items-center">
      <img src={covidLogo} alt="CovidLogo" width="50px" height="50px" />
      <p className="text-2xl text-green-700 font-semibold">
        Covid-19 Dashboard
      </p>
    </div>
  );

  return (
    <>
      <Toolbar
        start={startContent}
        className={`surface-50 p-0 px-2 border-noround border-none h-5rem`}
      />
    </>
  );
};

export default Navbar;
