import Image from "next/image";

const HomePage = () => {
   return (
      <section className="flex justify-center items-center flex-col p-5 h-[85%]">
         <Image src={"https://avatars.githubusercontent.com/u/105893969?v=4"} alt="profile" width={200} height={200} className="rounded-full mb-16 border-2 border-purple-500" />
         <p className="text-center text-xl">
            <span className="text-2xl font-semibold text-purple-600">Olá! 👋</span>
            <br />
            Eu sou Marlon Ferreira, Desenvolvedor Full Stack 💻
         </p>
      </section>
   );
};

export default HomePage;
