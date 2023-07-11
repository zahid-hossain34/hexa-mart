function Header(props: { title: string }) {
  return (
    <header className="App-header">
      <h1>{props?.title}</h1>
    </header>
  );
}

export default Header;
