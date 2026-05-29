import { useState, FormEvent } from 'react';
import { Phone, Search, Menu, X, ChevronDown, Sparkles, MapPin, SearchCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clinicLogo from '../assets/images/clinic_logo_1780065900435.png';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRequestAppointment: () => void;
  onSearchQuery: (query: string) => void;
}

export default function Navbar({ activeTab, setActiveTab, onRequestAppointment, onSearchQuery }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenSubMenu, setMobileOpenSubMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'meet-us', label: 'Meet Us', dropdown: [
      { id: 'meet-acosta', label: 'Meet Dr. Acosta' },
      { id: 'meet-nguyen', label: 'Meet Dr. Nguyen' },
      { id: 'meet-sayani', label: 'Meet Dr. Sayani' },
      { id: 'meet-suhail', label: 'Meet Dr. Suhail' }
    ]},
    { id: 'patient-info', label: 'Patient Information', dropdown: [
      { id: 'welcome', label: 'Welcome' },
      { id: 'new-patients', label: 'New Patients' },
      { id: 'patient-education', label: 'Patient Education' },
      { id: 'patient-registration', label: 'Patient Registration' },
      { id: 'first-visit', label: 'First Visit' },
      { id: 'exams-checkups', label: 'Dental Exams and Check-Ups' },
      { id: 'scheduling', label: 'Scheduling' },
      { id: 'financial-policy', label: 'Financial Policy' },
      { id: 'insurance', label: 'Insurance' },
      { id: 'infection-control', label: 'Infection Control' },
      { id: 'home-instructions', label: 'Home Instructions' }
    ]},
    { id: 'emergencies', label: 'Emergencies' },
    { id: 'treatments', label: 'Treatments', dropdown: [
      { id: 'orthodontic', label: 'Orthodontic Treatment' },
      { id: 'fillings', label: 'Fillings / Restorations' },
      { id: 'sealants', label: 'Dental Sealants' },
      { id: 'dentures', label: 'Dentures' },
      { id: 'bridges', label: 'Bridges' },
      { id: 'implants', label: 'Dental Implants' },
      { id: 'crowns', label: 'Crowns' },
      { id: 'extractions', label: 'Tooth Extractions' }
    ]},
    { id: 'cosmetic', label: 'Cosmetic Treatments', dropdown: [
      { id: 'bonding', label: 'Bonding' },
      { id: 'veneers', label: 'Porcelain Veneers' },
      { id: 'whitening', label: 'Teeth Whitening' },
      { id: 'invisalign', label: 'Invisalign' }
    ]},
    { id: 'dental-health', label: 'Dental Health', dropdown: [
      { id: 'oral-hygiene', label: 'Oral Hygiene' },
      { id: 'prophylaxis', label: 'Prophylaxis (Teeth Cleaning)' },
      { id: 'dictionary', label: 'Dental Dictionary' },
      { id: 'periodontal', label: 'Periodontal Maintenance' }
    ]},
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setMobileOpenSubMenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearchQuery(searchText);
    setSearchOpen(false);
  };

  const toggleMobileSubMenu = (id: string, e: any) => {
    e.stopPropagation();
    setMobileOpenSubMenu(prev => prev === id ? null : id);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div id="announcement-bar" className="bg-brand-navy text-warm-white text-xs py-2 px-4 border-b border-brand-teal/20">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-sans">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-aqua animate-pulse" />
            <span className="font-semibold tracking-wide">Now Welcoming New Patients in Katy, TX</span>
          </div>
          <div className="flex items-center gap-4 text-brand-aqua/90 text-[11px]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> 23922 Cinco Village Center Suite 100
            </span>
            <span className="font-mono">|</span>
            <a href="tel:2813951919" className="hover:text-white transition-colors duration-200 font-medium">
              Call Emergency: (281) 395-1919
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header id="sticky-header" className="sticky top-0 z-50 w-full glass-effect shadow-xs border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <nav className="max-w-[1440px] mx-auto px-4 xl:px-6 h-20 flex items-center justify-between gap-1">
          
          {/* Logo Section */}
          <div 
            id="nav-logo-container" 
            className="flex items-center cursor-pointer group shrink-0"
            onClick={() => handleNavClick('home')}
          >
            <img 
              src={clinicLogo} 
              alt="Dental Center of Texas" 
              className="h-10 xl:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Items */}
          <div id="desktop-links" className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0">
            {navItems.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isSelected = activeTab === item.id || (item.dropdown && item.dropdown.some(sub => sub.id === activeTab));
              
              return (
                <div key={item.id} className="relative group py-2">
                  <button
                    onClick={() => hasDropdown ? null : handleNavClick(item.id)}
                    className={`px-1.5 py-1 xl:px-2.5 xl:py-1.5 rounded-lg text-[11px] xl:text-xs font-semibold tracking-tight transition-all duration-155 flex items-center gap-0.5 cursor-pointer whitespace-nowrap ${
                      isSelected 
                        ? 'text-brand-navy bg-brand-teal/15 font-bold' 
                        : 'text-gray-600 hover:text-brand-navy hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && <ChevronDown className="w-3 h-3 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />}
                  </button>

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <div className="absolute left-0 mt-1 w-64 rounded-xl bg-white shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      {item.dropdown?.map((sub) => {
                        const isSubSelected = activeTab === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(sub.id)}
                            className={`w-full text-left px-4 py-2 text-xs transition-colors font-medium flex items-center gap-2 cursor-pointer ${
                              isSubSelected 
                                ? 'bg-brand-teal/10 text-brand-navy font-bold' 
                                : 'text-gray-700 hover:bg-brand-teal/5 hover:text-brand-navy'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${isSubSelected ? 'bg-brand-teal' : 'bg-gray-300'}`} />
                            <span className="truncate">{sub.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Premium Right Side Utilities */}
          <div id="nav-utilities" className="hidden lg:flex items-center space-x-1.5 xl:space-x-2 shrink-0">
            {/* Direct Dialing */}
            <a 
              href="tel:2813951919" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold transition-transform active:scale-95 duration-200 hover:bg-brand-navy/10 font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-brand-teal shrink-0" />
              <span className="hidden xl:inline">(281) 395-1919</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* In-tab Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 transition-colors duration-200 cursor-pointer"
              aria-label="Search site database"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Highlighted CTA */}
            <button
              onClick={onRequestAppointment}
              className="px-3 xl:px-4 py-1.5 xl:py-2 rounded-full bg-brand-teal text-brand-navy text-[11px] xl:text-xs font-bold shadow-md shadow-brand-teal/15 hover:shadow-brand-teal/30 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Right Utilities */}
          <div className="flex lg:hidden items-center gap-1.5">
            <a 
              href="tel:2813951919" 
              className="p-2 rounded-full bg-brand-teal/15 text-brand-navy"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Search Modal Slider */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-100 bg-white shadow-inner overflow-hidden"
            >
              <form onSubmit={handleSearchSubmit} className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
                <SearchCheck className="w-5 h-5 text-brand-teal shrink-0" />
                <input
                  type="text"
                  placeholder="Need something specific? (e.g. veneers, crown, implants, hours...)"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full py-2 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-hidden font-normal"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-brand-navy text-white rounded-lg text-xs font-semibold hover:bg-brand-teal hover:text-brand-navy transition-colors duration-200 shrink-0"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-xs font-mono"
                >
                  Close
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Animated Slideout Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-white/95 backdrop-blur-md shadow-2xl z-40 border-b border-gray-100 lg:hidden overflow-y-auto max-h-[calc(100vh-5rem)]"
          >
            <div className="px-5 py-6 space-y-2">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown;
                const isSubMenuOpen = mobileOpenSubMenu === item.id;
                
                return (
                  <div key={item.id} className="border-b border-gray-50 pb-2 mb-2">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => hasDropdown ? setMobileOpenSubMenu(isSubMenuOpen ? null : item.id) : handleNavClick(item.id)}
                        className={`w-full text-left py-2 font-display text-sm font-semibold flex items-center justify-between ${
                          activeTab === item.id ? 'text-brand-teal' : 'text-brand-navy'
                        }`}
                      >
                        <span>{item.label}</span>
                      </button>
                      {hasDropdown && (
                        <button 
                          onClick={(e) => toggleMobileSubMenu(item.id, e)}
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {hasDropdown && isSubMenuOpen && (
                      <div className="pl-4 mt-1 space-y-1 bg-gray-50/50 p-2 rounded-lg">
                        {item.dropdown?.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(sub.id)}
                            className={`block w-full text-left py-1.5 text-xs font-medium cursor-pointer ${
                              activeTab === sub.id ? 'text-brand-teal font-bold' : 'text-gray-600 hover:text-brand-navy'
                            }`}
                          >
                            • {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestAppointment();
                  }}
                  className="w-full py-3 bg-brand-teal text-brand-navy font-bold rounded-xl shadow-md text-center inline-block text-xs cursor-pointer"
                >
                  Request Appointment
                </button>
                <a
                  href="tel:2813951919"
                  className="w-full py-3 bg-brand-navy text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 text-xs font-mono"
                >
                  <Phone className="w-4 h-4 text-brand-aqua" />
                  (281) 395-1919
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
