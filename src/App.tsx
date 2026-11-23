/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { TeamSection } from './components/TeamSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B192C] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PortfolioSection />
        <ClientsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
