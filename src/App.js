import Photo from "./assets/img/img.png";
import { ReactComponent as Burger } from "./assets/svg/burger.svg";
function App() {
  return (
    <div>
      <header className="w-full h-10 mt-5">
        <div className="sm:hidden flex items-end justify-end mr-5 mt-5">
          <Burger />
        </div>
        <nav className="font-bold text-gray-400 flex items-center justify-center space-x-40 ml-64 hidden sm:block">
          <a className="hover:text-black" href="/">
            Home
          </a>
          <a className="hover:text-black" href="/">
            About me
          </a>
          <a className="hover:text-black" href="/">
            Skills
          </a>
          <a className="hover:text-black" href="/">
            Portfolio
          </a>
          <a className="hover:text-black" href="/">
            Contacts
          </a>
        </nav>
      </header>
      <div className="flex justify-center items-center hidden sm:block">
        <hr className="w-2/2 border-t border-gray-300 ml-48 mr-48" />
      </div>
      <main>
        <section className="flex sm:items-center justify-center items-start justify-start mt-10 space-x-60 sm:flex-row flex-col sm:mt-10 mt-0 ">
          <h1 className="text-black w-10 h-5 sm:font-extrabold text-2xl font-extrabold ml-20">
            Zarina Orgubaeva
          </h1>
          <h3 className="sm:w-64 mt-5 w-64 mt-20  ">
            Front-end | React developer 21 years old, Bishkek
          </h3>
          <h3 className="transform rotate-105 translate-x-8 hidden sm:block ">
            RU | ENG
          </h3>
        </section>
        <section className="w-90 mt-6 sm:ml-80 ml-14 w-84 mr-14 ">
          <img src={Photo} alt="альтернативный текст" />
        </section>
      </main>
      <div className="bg-gray mt-10 flex flex-col justify-center items-center ">
        <h2 className="font-bold text-center text-2xl">About me</h2>
        <p className="sm:w-64 text-base">
          Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design
          and everything connected with it.
        </p>
        <p className="mt-5 sm:w-64 text-base">
          I'm studying at courses "Web and mobile design interfaces" in
          IT-Academy
        </p>
        <p className=" mt-5 sm:w-64 text-base">
          Ready to implement excellent projects with wonderful people.
        </p>
      </div>
    </div>
  );
}

export default App;
