import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from './data';
import {
  Briefcase,
  GraduationCap,
  FolderDot,
  Code2,
  Award,
  BookOpen,
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const SectionHeading = ({ children, icon: Icon, subtitle }: { children: React.ReactNode, icon?: React.ElementType, subtitle?: string }) => (
  <div className="border-b border-[#333] pb-5 mb-8 flex flex-col gap-4">
    <div className="flex items-center gap-4">
      {Icon && <Icon size={32} className="text-[#888]" />}
      <h2 className="text-[40px] md:text-[64px] leading-[0.9] font-bold tracking-[-2px] text-white uppercase m-0">
        {children}
      </h2>
    </div>
    {subtitle && <div className="text-[14px] uppercase tracking-[4px] text-[#888]">{subtitle}</div>}
  </div>
);

const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-[#121212] p-6 md:p-8 border border-[#333] ${className}`}>
    {children}
  </div>
);

export default function App() {
  const { hero, experience, education, projects, languages, skills, certifications, autobiography } = portfolioData;

  return (
    <div className="min-h-screen selection:bg-[#444] bg-[#121212] text-[#E5E5E5] font-sans">
      {/* Background decoration removed for minimalist look */}

      <nav className="fixed top-0 inset-x-0 z-50 bg-[#121212]/90 backdrop-blur-md border-b border-[#333] hidden md:block">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-bold text-white tracking-[2px] uppercase text-sm">{hero.name}</span>
          <div className="flex gap-8 text-[12px] uppercase tracking-[1px] text-[#AAA]">
            <a href="#experience" className="hover:text-white transition-colors">經歷</a>
            <a href="#projects" className="hover:text-white transition-colors">作品</a>
            <a href="#education" className="hover:text-white transition-colors">學歷</a>
            <a href="#skills" className="hover:text-white transition-colors">技能</a>
            <a href="#about" className="hover:text-white transition-colors">關於我</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24 md:pt-36 pb-24 space-y-32">
        
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-start"
        >
          {/* Portrait Image */}
          <div className="w-40 h-56 md:w-[200px] md:h-[280px] shrink-0 bg-[#2A2A2A] border border-[#333] relative overflow-hidden group mx-auto md:mx-0">
            <img 
              src="/avatar.png"
              alt="HSUAN YU CHEN"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 grayscale hover:grayscale-0"
              onError={(e) => { 
                // Fallback if the image doesn't exist
                e.currentTarget.src = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop"; 
              }}
            />
            <div className="absolute inset-0 border border-white/10 m-3 pointer-events-none" />
            <div className="absolute top-4 right-4 text-[10px] tracking-[4px] text-[#E5E5E5] mix-blend-difference bg-black/40 px-2 py-1">IMG_01</div>
          </div>

          {/* Intro Content */}
          <div className="flex-1 flex flex-col gap-10 mt-4">
            <div className="space-y-6">
              <div className="serif text-xl md:text-2xl text-[#888]">
                 陳宣諭 / THE PORTFOLIO
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#E5E5E5] uppercase leading-none">
                <span className="block mb-2">HSUAN YU</span>
                <span className="text-[#666]">CHEN</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 pt-4">
                 <span className="inline-block px-3 py-1 border border-[#444] text-[#AAA] text-[10px] tracking-[2px]">{hero.zodiac}</span>
                 <span className="inline-block px-3 py-1 border border-[#444] text-[#AAA] text-[10px] tracking-[2px]">{hero.bloodType}</span>
                 <span className="inline-block px-3 py-1 border border-[#444] text-[#AAA] text-[10px] tracking-[2px]">{hero.birthDate}</span>
              </div>
            </div>

            <div className="space-y-8 max-w-lg">
              <p className="text-[#888] text-[14px] leading-[1.8]">
                {hero.intro}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a href={`mailto:${hero.email}`} className="flex items-center gap-2 text-white border-b border-[#E5E5E5] pb-1 uppercase tracking-[2px] text-[12px] hover:text-[#AAA] hover:border-[#AAA] transition-colors">
                  CONTACT ME <Mail size={14} className="ml-2" />
                </a>
                <div className="flex items-center gap-4">
                  {[
                    { Icon: Linkedin, href: "#" },
                    { Icon: Instagram, href: "#" },
                    { Icon: Youtube, href: "#" },
                    { Icon: Facebook, href: "#" },
                    { Icon: Twitter, href: "#" },
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href} className="text-[#666] hover:text-white transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WORK EXPERIENCE */}
        <motion.section 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           id="experience"
        >
          <SectionHeading icon={Briefcase} subtitle="EXPERIENCE">工作經歷</SectionHeading>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <Card key={i}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="serif text-2xl text-white mb-2">{exp.company}</h3>
                    <p className="text-[#888] uppercase tracking-[2px] text-[12px]">{exp.role}</p>
                  </div>
                  <span className="text-[11px] tracking-[1px] text-[#666] border border-[#333] px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-4 text-[#888] leading-relaxed text-[14px]">
                      <span className="text-[#555] tracking-[2px] text-[10px] mt-1 shrink-0">--</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          id="projects"
        >
          <SectionHeading icon={FolderDot} subtitle="PROJECT ARCHIVE">學期作業</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <a 
                key={i} 
                href={proj.url || "#"} 
                target={proj.url ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col bg-[#121212] overflow-hidden border border-[#333] hover:border-[#666] transition-all"
              >
                <div className="aspect-square bg-[#1A1A1A] relative overflow-hidden flex flex-col items-center justify-center border-b border-[#333]">
                  <div className="text-[#333] text-[10px] tracking-[4px] uppercase absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                     PROJECT_0{i+1}
                  </div>
                  <FolderDot className="w-8 h-8 text-[#444] z-10 group-hover:text-[#666] transition-colors" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="serif text-lg text-[#E5E5E5] group-hover:text-white transition-colors">
                      {proj.title}
                    </h3>
                    {proj.url && <ExternalLink size={14} className="text-[#666] shrink-0" />}
                  </div>
                  {proj.date && (
                    <p className="text-[11px] tracking-[1px] text-[#666] mt-auto pt-4 uppercase">
                      DATE: {proj.date}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION & SKILLS ROW */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* EDUCATION */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            id="education"
          >
            <SectionHeading icon={GraduationCap} subtitle="EDUCATION">學歷</SectionHeading>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <Card key={i} className="hover:border-[#666] transition-colors">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] tracking-[2px] text-[#666] border border-[#333] px-3 py-1 rounded-full w-fit">
                      {edu.period}
                    </span>
                    <h3 className="serif text-xl md:text-2xl text-[#E5E5E5]">{edu.school}</h3>
                    <p className="text-[#888] text-[13px] tracking-[1px] uppercase">{edu.department}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* SKILLS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            id="skills"
          >
            <SectionHeading icon={Code2} subtitle="CAPABILITIES">技能與語言</SectionHeading>
            <Card className="space-y-12 h-full">
              
              <div>
                <h4 className="border-b border-[#333] pb-2 text-[12px] text-[#555] tracking-[4px] uppercase mb-6">語言能力 / LANGUAGES</h4>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, i) => (
                    <div key={i} className="px-4 py-2 border border-[#333] text-[#E5E5E5] text-[13px] tracking-[1px]">
                      <span>{lang.name}</span>
                      <span className="ml-2 text-[#888]">{lang.level}</span>
                      {lang.cert && <span className="ml-2 text-[#555]">[{lang.cert}]</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="border-b border-[#333] pb-2 text-[12px] text-[#555] tracking-[4px] uppercase mb-6">電腦技能 / SOFTWARE</h4>
                <div className="space-y-6">
                  {skills.map((skillGroup, i) => (
                    <div key={i}>
                      <span className="text-[#E5E5E5] text-[14px] font-medium block mb-3 uppercase tracking-[1px]">{skillGroup.category}</span>
                      <div className="flex flex-col gap-2">
                        {skillGroup.items.map((item, j) => (
                          <span key={j} className="text-[#888] text-[13px]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </Card>
          </motion.section>
        </div>

        {/* CERTIFICATIONS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading icon={Award} subtitle="CERTIFICATIONS">專業證照</SectionHeading>
          <Card>
            <div className="grid md:grid-cols-2 gap-6">
               {certifications.map((cert, i) => (
                 <div key={i} className="flex items-start gap-4 p-5 border border-[#333] hover:border-[#666] transition-colors">
                   <span className="text-[#444] text-[10px] tracking-[2px] mt-1 shrink-0">0{i+1}</span>
                   <span className="text-[#AAA] text-[13px] leading-relaxed">{cert}</span>
                 </div>
               ))}
            </div>
          </Card>
        </motion.section>

        {/* AUTOBIOGRAPHY */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          id="about"
        >
          <SectionHeading icon={BookOpen} subtitle="BIOGRAPHY">自傳</SectionHeading>
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BookOpen size={240} strokeWidth={0.5} className="text-[#333]" />
            </div>
            <div className="space-y-8 relative z-10 max-w-4xl">
              {autobiography.map((para, i) => (
                <p key={i} className="text-[#888] leading-[2] text-[15px] max-w-3xl">
                  {para}
                </p>
              ))}
            </div>
          </Card>
        </motion.section>

      </main>

      <footer className="border-t border-[#333] mt-24 py-16 text-center">
        <div className="text-[10px] tracking-[4px] text-[#555] uppercase">
          © {new Date().getFullYear()} {hero.name}. ALL RIGHTS RESERVED.<br/>
          <span className="block mt-4 text-[#333]">DESIGN: EDITORIAL AESTHETIC</span>
        </div>
      </footer>
    </div>
  );
}
