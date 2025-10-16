import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 rounded-xl border-2 border-yellow-400/30 p-6 text-center hover:border-yellow-400 transition-all">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-semibold text-yellow-400 mb-2">Email Us</h3>
            <p className="text-gray-300 text-sm">support@cccpractice.ca</p>
          </div>

          <div className="bg-gray-800 rounded-xl border-2 border-yellow-400/30 p-6 text-center hover:border-yellow-400 transition-all">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-semibold text-yellow-400 mb-2">Live Chat</h3>
            <p className="text-gray-300 text-sm">Available 9am-5pm EST</p>
          </div>

          <div className="bg-gray-800 rounded-xl border-2 border-yellow-400/30 p-6 text-center hover:border-yellow-400 transition-all">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Send className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-semibold text-yellow-400 mb-2">Social Media</h3>
            <p className="text-gray-300 text-sm">@cccpractice</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl border-2 border-yellow-400/30 shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-yellow-400/30 text-gray-100 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-shadow"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-yellow-400/30 text-gray-100 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-shadow"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-yellow-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-yellow-400/30 text-gray-100 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-shadow"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-yellow-400/30 text-gray-100 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-shadow resize-none"
                placeholder="Tell us more about your inquiry..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl shadow-xl p-8 text-black">
          <h3 className="text-2xl font-bold mb-3">Frequently Asked Questions</h3>
          <p className="mb-4">
            Before reaching out, check our FAQ section for quick answers to common questions
            about the platform, problems, and submission guidelines.
          </p>
          <button className="px-6 py-2 bg-black text-yellow-400 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
            View FAQ
          </button>
        </div>
      </div>
    </div>
  );
}
