import Image from "next/image";

const Tech = () => {
   return (
      <section className="grid grid-cols-2 p-5 gap-3 md:grid-cols-4 container mx-auto">
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/github.svg" alt="github" width={25} height={25} />
            <span className="font-medium">GitHub</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/git.svg" alt="git" width={25} height={25} />
            <span className="font-medium">Git</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/reactjs.svg" alt="reactjs" width={25} height={25} />
            <span className="font-medium">ReactJS</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/nextjs2.svg" alt="nextjs2" width={25} height={25} />
            <span className="font-medium">NextJS</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/typescript.svg" alt="typescript" width={25} height={25} />
            <span className="font-medium">TypeScript</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/js.svg" alt="js" width={25} height={25} />
            <span className="font-medium">JavaScript</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full h-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/html5.svg" alt="html5" width={25} height={25} />
            <span className="font-medium">HTML</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/css3.svg" alt="css3" width={25} height={25} />
            <span className="font-medium">CSS</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/tailwindcss.svg" alt="tailwindcss" width={25} height={25} />
            <span className="font-medium">Tailwind</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/figma.svg" alt="figma" width={25} height={25} />
            <span className="font-medium">Figma</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/nodejs.svg" alt="nodejs" width={25} height={25} />
            <span className="font-medium">NodeJS</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/mysql.svg" alt="mysql" width={25} height={25} />
            <span className="font-medium">MySQL</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/mongodb.svg" alt="mongodb" width={16} height={16} />
            <span className="font-medium">MongoDB</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/postgresql.svg" alt="postgresql" width={25} height={25} />
            <span className="font-medium">PostgreSQL</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/prisma.svg" alt="prisma" width={25} height={25} />
            <span className="font-medium">Prisma</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-8 w-8" src="/aws.svg" alt="aws" width={25} height={25} />
            <span className="font-medium">AWS</span>
         </div>
      </section>
   );
};

export default Tech;
