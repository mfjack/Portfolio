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

         <div className="flex mt-16 justify-center items-center gap-4 flex-wrap">
            <h3 className="font-semibold hidden md:block">Minhas tecnologias:</h3>
            <Image className="transition-all hover:scale-110" src="/github.svg" alt="github" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/git.svg" alt="git" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/reactjs.svg" alt="reactjs" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/nextjs2.svg" alt="nextjs2" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/typescript.svg" alt="typescript" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/js.svg" alt="js" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/html5.svg" alt="html5" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/css3.svg" alt="css3" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/tailwindcss.svg" alt="tailwindcss" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/figma.svg" alt="figma" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/nodejs.svg" alt="nodejs" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/mysql.svg" alt="mysql" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/postgresql.svg" alt="postgresql" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/mongodb.svg" alt="mongodb" width={16} height={16} />
            <Image className="transition-all hover:scale-110" src="/prisma.svg" alt="prisma" width={25} height={25} />
            <Image className="transition-all hover:scale-110" src="/aws.svg" alt="aws" width={25} height={25} />
            <Image src="/jest.svg" alt="jest" width={25} height={25} />
         </div>
      </section>
   );
};

export default HomePage;
