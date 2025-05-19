import React, { useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

type ContactSectionProps = {
  theme: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-20 ${
        theme === "light"
          ? "bg-gray-50 text-gray-800"
          : theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "purple"
          ? "bg-purple-950 text-white"
          : "bg-emerald-950 text-white"
      }`}
    >
      <div
        ref={contentRef}
        className="container mx-auto px-4 md:px-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div
            className={`h-1 w-20 mx-auto mb-8 ${
              theme === "light"
                ? "bg-blue-600"
                : theme === "dark"
                ? "bg-blue-500"
                : theme === "purple"
                ? "bg-purple-500"
                : "bg-emerald-500"
            }`}
          ></div>
          <p className="text-lg">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div
              className={`p-8 rounded-xl mb-8 ${
                theme === "light"
                  ? "bg-white shadow-md"
                  : theme === "dark"
                  ? "bg-gray-800"
                  : theme === "purple"
                  ? "bg-purple-900"
                  : "bg-emerald-900"
              }`}
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-full mr-4 ${
                      theme === "light"
                        ? "bg-blue-100 text-blue-600"
                        : theme === "dark"
                        ? "bg-blue-900 text-blue-300"
                        : theme === "purple"
                        ? "bg-purple-800 text-purple-200"
                        : "bg-emerald-800 text-emerald-200"
                    }`}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="razkhan070405.com"
                      className={`${
                        theme === "light"
                          ? "text-blue-600 hover:text-blue-700"
                          : theme === "dark"
                          ? "text-blue-400 hover:text-blue-300"
                          : theme === "purple"
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-emerald-400 hover:text-emerald-300"
                      }`}
                    >
                      razkhan070405.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-full mr-4 ${
                      theme === "light"
                        ? "bg-blue-100 text-blue-600"
                        : theme === "dark"
                        ? "bg-blue-900 text-blue-300"
                        : theme === "purple"
                        ? "bg-purple-800 text-purple-200"
                        : "bg-emerald-800 text-emerald-200"
                    }`}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+6281268088246"
                      className={`${
                        theme === "light"
                          ? "text-blue-600 hover:text-blue-700"
                          : theme === "dark"
                          ? "text-blue-400 hover:text-blue-300"
                          : theme === "purple"
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-emerald-400 hover:text-emerald-300"
                      }`}
                    >
                      +6281268088246
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-full mr-4 ${
                      theme === "light"
                        ? "bg-blue-100 text-blue-600"
                        : theme === "dark"
                        ? "bg-blue-900 text-blue-300"
                        : theme === "purple"
                        ? "bg-purple-800 text-purple-200"
                        : "bg-emerald-800 text-emerald-200"
                    }`}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="opacity-80">Sumatra Barat, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`p-8 rounded-xl ${
                theme === "light"
                  ? "bg-blue-600 text-white"
                  : theme === "dark"
                  ? "bg-blue-600 text-white"
                  : theme === "purple"
                  ? "bg-purple-600 text-white"
                  : "bg-emerald-600 text-white"
              }`}
            >
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6 opacity-90">
                Follow me on social media to see my latest projects and updates.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ravirizkhan7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-ravi-rizkhan-59111925b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`p-8 rounded-xl ${
              theme === "light"
                ? "bg-white shadow-md"
                : theme === "dark"
                ? "bg-gray-800"
                : theme === "purple"
                ? "bg-purple-900"
                : "bg-emerald-900"
            }`}
          >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 rounded-lg ${
                      theme === "light"
                        ? "bg-gray-100 focus:bg-white border border-gray-300 focus:border-blue-500"
                        : theme === "dark"
                        ? "bg-gray-700 border border-gray-600 focus:border-blue-400"
                        : theme === "purple"
                        ? "bg-purple-800 border border-purple-700 focus:border-purple-400"
                        : "bg-emerald-800 border border-emerald-700 focus:border-emerald-400"
                    } outline-none transition-colors`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 rounded-lg ${
                      theme === "light"
                        ? "bg-gray-100 focus:bg-white border border-gray-300 focus:border-blue-500"
                        : theme === "dark"
                        ? "bg-gray-700 border border-gray-600 focus:border-blue-400"
                        : theme === "purple"
                        ? "bg-purple-800 border border-purple-700 focus:border-purple-400"
                        : "bg-emerald-800 border border-emerald-700 focus:border-emerald-400"
                    } outline-none transition-colors`}
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === "light"
                      ? "bg-gray-100 focus:bg-white border border-gray-300 focus:border-blue-500"
                      : theme === "dark"
                      ? "bg-gray-700 border border-gray-600 focus:border-blue-400"
                      : theme === "purple"
                      ? "bg-purple-800 border border-purple-700 focus:border-purple-400"
                      : "bg-emerald-800 border border-emerald-700 focus:border-emerald-400"
                  } outline-none transition-colors`}
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === "light"
                      ? "bg-gray-100 focus:bg-white border border-gray-300 focus:border-blue-500"
                      : theme === "dark"
                      ? "bg-gray-700 border border-gray-600 focus:border-blue-400"
                      : theme === "purple"
                      ? "bg-purple-800 border border-purple-700 focus:border-purple-400"
                      : "bg-emerald-800 border border-emerald-700 focus:border-emerald-400"
                  } outline-none transition-colors`}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center ${
                  theme === "light"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : theme === "dark"
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : theme === "purple"
                    ? "bg-purple-500 hover:bg-purple-400 text-white"
                    : "bg-emerald-500 hover:bg-emerald-400 text-white"
                }`}
              >
                <span>Send Message</span>
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
