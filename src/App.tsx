import { Hero } from "@/components/Hero/Hero";
import { MainContent } from "@/components/MainContent/MainContent";

function App() {
  return (
    <div className="bg-background antialiased">
      <div className="fixed inset-y-0 m-auto h-1/2 w-1/2 bg-gradient-to-tr from-indigo-400 via-teal-900 to-[rgb(130,116,144)] blur-[118px] opacity-50" />
      <div className="z-1 mx-auto min-h-screen max-w-screen-xl text-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-accent/70">
          <Hero />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
