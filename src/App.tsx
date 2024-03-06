import { Hero } from "@/components/Hero/Hero";
import { MainContent } from "@/components/MainContent/MainContent";

function App() {
  return (
    <div className="bg-background">
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-accent/70 antialiased">
          <Hero />
          <MainContent />
        </div>
      </div>
      <div className="fixed inset-y-0 m-auto h-1/2 w-1/2 bg-gradient-to-tr from-indigo-400 via-teal-900 to-[rgb(130,116,144)] blur-[118px] opacity-50" />
    </div>
  );
}

export default App;
