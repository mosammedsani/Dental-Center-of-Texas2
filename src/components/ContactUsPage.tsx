import ContactForm from './ContactForm';

export default function ContactUsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-12 animate-fade-in">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Get In Touch</span>
        <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-brand-navy">Contact Our Katy Office</h1>
        <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
          Whether you have questions about your dental plan copays, wish to coordinate a comprehensive cosmetic makeover, or need same-day emergency relief, we are ready to assist you.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
