import AppBar from "./components/AppBar/AppBar";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import Card from "./components/Card/Card";

export default function Home() {


  return (
    <main className="">
      <AppBar />
      <Card initial="Y" title="Hello MUI Sample." subheader="Jan 31 2024" content="Hello"/>
      <BottomNavigation />
    </main>
  );
}
