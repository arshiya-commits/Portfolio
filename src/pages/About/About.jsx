import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";
import jpeg from "@/assets/images/jpeg.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={jpeg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={900}
                />
              </div>
            </div>
{/* 
            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Nazmul Hossain, a passionate JavaScript developer
                specializing in creating innovative web solutions and
                user-friendly interfaces.{" "}
                <span className="font-bold text-white">
                  As the creator of the OlovaJS UI Framework
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the creator of OlovaJS,
                    I'm pushing the boundaries of JavaScript frameworks to
                    empower developers worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nazmul Hossain, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div> */}
            <div className="relative space-y-4">
  <p className="text-white">
    Hello! I'm Arshiya Shaik, a curious and committed tech enthusiast with a passion for solving real-world problems through code. I'm a dedicated{" "}
    <span className="font-bold text-white">MERN Stack Developer</span> and a problem-solver at heart, with a strong foundation in{" "}
    <span className="font-bold text-white">Data Structures and Algorithms</span>.
  </p>

  <p className="text-white">
    As a{" "}

    <span className="font-bold text-white">Data Science student</span>, I thrive in fast-paced, team-oriented environments. I enjoy building scalable apps, exploring datasets for insights, and working across the stack—from frontend design to backend logic.
  </p>

  <div className="pt-6">
    <blockquote className="border-l-4 border-gray-300 pl-4">
      <p className="text-white">
        I believe that technology is most powerful when combined with clear communication and teamwork. With a strong grip on both tech and soft skills, I'm currently exploring exciting projects in full-stack development and intelligent data applications that create real-world impact.
      </p>

      <div className="mt-6 space-y-3">
        <cite className="block font-medium text-white">
          Arshiya Shaik – Developer, Innovator, Communicator
        </cite>
       
      </div>
    </blockquote>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
}
