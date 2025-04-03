import Logo from "@/assets/images/logo.svg";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center gap-2">
        <Logo />
        <span className="">Tim Chmieletzki</span>
      </div>
    </header>
  );
};
