import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Contact form request failed with status ${response.status}`);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Unable to send contact form message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-gray-50 py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700 dark:text-purple-300">
            Business analysis · Remote roles · Project work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white md:text-5xl">
            Let&apos;s talk about the work ahead
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            If you&apos;re hiring a business analyst or need support clarifying requirements, improving processes, or delivering a system, I&apos;d be glad to hear from you. I bring extensive digital health experience and can contribute across industries.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <h3 className="text-lg font-bold text-gray-950 dark:text-white">Connect directly</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
                Based in Lilongwe, Malawi and open to remote opportunities across industries.
              </p>
              <a
                href="https://linkedin.com/in/kyton-thaundi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-purple-700 hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-purple-300 dark:hover:text-purple-200"
              >
                Connect on LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="px-1 text-sm text-gray-600 dark:text-gray-400">
              Prefer a message? Share a little about the opportunity or project and I&apos;ll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900 md:p-8">
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-purple-900"
                placeholder="Name"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-purple-900"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                How can I help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-purple-900"
                placeholder="Tell me about the role or project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70 dark:bg-purple-600 dark:hover:bg-purple-500"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {status === 'sending' ? 'Sending…' : 'Send a message'}
            </button>
            <p aria-live="polite" className={`mt-4 text-sm ${status === 'error' ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'}`}>
              {status === 'success' && 'Thanks for reaching out. Your message has been sent.'}
              {status === 'error' && 'Your message could not be sent. Please try again or connect with me on LinkedIn.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
