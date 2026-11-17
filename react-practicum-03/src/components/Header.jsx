import ThemeSwitcher from "./ThemeSwitcher";

function Header({ themeClass, switchTheme }) {
  return (
    <div className={themeClass}>
      <h1>Header Example</h1>
      <ThemeSwitcher switchTheme={switchTheme} />
    </div>
  );
}

export default Header;
