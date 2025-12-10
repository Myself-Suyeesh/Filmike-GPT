import filmikeDarkLogo from "/filmike-dark-logo.png";

const Header = () => {
  return (
    <div className="absolute z-10 text-white flex justify-between w-full px-6 py-5 bg-linear-to-b from-black">
      <img className="w-10 " src={filmikeDarkLogo} alt="Filmike logo" />
      <p className="text-sm font-light tracking-wide text-white/75">
        All rights are reserved by{" "}
        <span className="text-white font-bold">@Filmike</span>
      </p>
    </div>
  );
};

export default Header;
