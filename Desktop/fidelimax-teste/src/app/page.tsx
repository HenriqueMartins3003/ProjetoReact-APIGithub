import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />

      <div className="-mt-20">
        <MainContainer />
      </div>
    </div>
  );
}
