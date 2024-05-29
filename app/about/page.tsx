import { FileDownIcon, Github, Linkedin, MessageCircleMoreIcon } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
   return (
      <section className="p-5">
         <h2 className="text-xl font-semibold text-purple-600">Sobre</h2>

         <p className="mt-10 text-sm leading-6">
            Sou Desenvolvedor Full Stack apaixonado por tecnologia e criar códigos. Formado em Desenvolvimento Full Stack e atualmente me graduando em Engenharia de Software. <br />
            Acredito na importância de estar sempre atualizado com as melhores práticas e novas tecnologias. Para isso, desenvolvo projetos pessoais continuamente, visando evoluir meu conhecimento e
            habilidades. Além disso, estou envolvido em um projeto voluntário, onde tenho a oportunidade de aplicar minhas competências técnicas. Além da minha vida profissional, valorizo muito meu
            tempo com minha família e amigos e aproveito as manhãs para surfar, uma atividade que me ajuda a começar o dia com energia e clareza mental.
         </p>

         <div className="flex justify-between items-center mt-10">
            <ul className="gap-5 flex items-center">
               <li>
                  <Link href="https://www.linkedin.com/in/jackvr/" target="_blank">
                     <Linkedin className="text-purple-600" />
                  </Link>
               </li>
               <li>
                  <Link href="https://github.com/mfjack" target="_blank">
                     <Github className="text-purple-600" />
                  </Link>
               </li>
               <li>
                  <Link href="https://wa.me/5522997823207" target="_blank">
                     <MessageCircleMoreIcon className="text-purple-600" />
                  </Link>
               </li>
            </ul>

            <Link
               href="/MarlonFerreira.pdf"
               target="_blank"
               download="MarlonFerreira.pdf"
               className="flex gap-2 items-center font-medium text-white bg-purple-500 hover:bg-purple-600 border-2 p-2 rounded-lg shadow-md">
               <span className="font-semibold">Currículo</span>
               <FileDownIcon />
            </Link>
         </div>
      </section>
   );
};

export default AboutPage;
