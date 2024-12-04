import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function About() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitMessage('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        
        <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
          Boycott Israeli Tech is a project that aims to raise awareness about the Israeli tech industry 
          and its connections to the Israeli government and military. We believe that by boycotting 
          Israeli tech, we can help bring about change and hold those responsible for human rights 
          abuses accountable.
        </p>

        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground text-left mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground text-left mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground text-left mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <p className="text-green-500 mt-4">{submitMessage}</p>
            )}
          </form>
        </div>
      </div>
    </PageLayout>
  );
}