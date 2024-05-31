import Image from "next/image";

const Tech = () => {
   return (
      <div className="grid grid-cols-2 p-5 gap-3 md:grid-cols-4">
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/github.svg" alt="github" width={25} height={25} />
            <span>GitHub</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/git.svg" alt="git" width={25} height={25} />
            <span>Git</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/reactjs.svg" alt="reactjs" width={25} height={25} />
            <span>ReactJS</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/nextjs2.svg" alt="nextjs2" width={25} height={25} />
            <span>NextJS</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/typescript.svg" alt="typescript" width={25} height={25} />
            <span>TypeScript</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/js.svg" alt="js" width={25} height={25} />
            <span>JavaScript</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/html5.svg" alt="html5" width={25} height={25} />
            <span>HTML</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/css3.svg" alt="css3" width={25} height={25} />
            <span>CSS</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/tailwindcss.svg" alt="tailwindcss" width={25} height={25} />
            <span>Tailwind</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/figma.svg" alt="figma" width={25} height={25} />
            <span>Figma</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/nodejs.svg" alt="nodejs" width={25} height={25} />
            <span>NodeJS</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/mysql.svg" alt="mysql" width={25} height={25} />
            <span>MySQL</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/mongodb.svg" alt="mongodb" width={16} height={16} />
            <span>MongoDB</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/postgresql.svg" alt="postgresql" width={25} height={25} />
            <span>PostgreSQL</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/prisma.svg" alt="prisma" width={25} height={25} />
            <span>Prisma</span>
         </div>
         <div className="flex flex-col items-center gap-2 border-2 shadow-md border-purple-500 rounded-lg p-6 w-full">
            <Image className="transition-all hover:scale-110 h-5 w-5" src="/aws.svg" alt="aws" width={25} height={25} />
            <span>AWS</span>
         </div>
      </div>
   );
};

export default Tech;
