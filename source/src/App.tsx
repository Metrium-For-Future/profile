import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Briefcase, User, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Jonathan MacLeod
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Senior Blockchain Engineer & Full stack Developer
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="#" className="hover:text-blue-400 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:olaf11071107@outlook.com" className="hover:text-blue-400 transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
          <a href="#about" className="animate-bounce inline-block">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://i.postimg.cc/9QmSxyDr/output.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                As a passionate developer with 7+ years of rich experience in various techs and stacks, I was roaming in the waves of coding, doing lots of great works. I am a master of Blockchain, Modern JS libs and frameworks like React.js, Vue.js, Svelte.js and Angular.js, Enterprise App Development with Spring, Laravel, etc.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Solidity', level: '95%' },
              { name: 'Ethereum', level: '90%' },
              { name: 'Node.js', level: '85%' },
              { name: 'Python', level: '80%' },
              { name: 'React.js', level: '99%' },
              { name: 'Vue.js', level: '90%' },
              { name: 'Laravel', level: '95%' },
              { name: 'Spring', level: '95%' },
              { name: 'DevOps', level: '75%' },
              { name: 'OpenAI', level: '85%' },
            ].map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with React and Node.js',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
              },
              {
                title: 'AI Chat Application',
                description: 'Real-time chat app with AI-powered responses',
                image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
              },
            ].map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Send className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© 2024 Jonathan MacLeod. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;