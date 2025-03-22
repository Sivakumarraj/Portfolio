import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Send } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Siva Kumar Raju</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Full Stack Developer</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Sivakumarraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/padmaraju-siva-kumar-raju-359157229/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Passionate Full Stack Developer with expertise in building scalable web applications.
              Experienced in modern web technologies and committed to writing clean, maintainable code.
            </p>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
                  alt="E-commerce Project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                  <p className="text-gray-400 mb-4">
                    Full-stack e-commerce platform built with React, Node.js, and MongoDB.
                    Features include user authentication, product management, and payment integration.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Sivakumarraj/ecommerce-platform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800"
                  alt="Task Management App"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                  <p className="text-gray-400 mb-4">
                    Real-time task management application using React and Firebase.
                    Includes team collaboration features and progress tracking.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Sivakumarraj/task-manager"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="font-bold mb-4">Frontend</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                  <li>Redux</li>
                </ul>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="font-bold mb-4">Backend</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Firebase</li>
                </ul>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="font-bold mb-4">Tools & Others</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>CI/CD</li>
                  <li>Jest</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Siva Kumar Raju. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;