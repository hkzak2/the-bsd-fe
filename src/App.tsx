import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { People } from './pages/People';
import { Companies } from './pages/Companies';
import { Investors } from './pages/Investors';
import { CompanyDetails } from './pages/CompanyDetails';
import { PersonDetails } from './pages/PersonDetails';
import { About } from './pages/About';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:id" element={<CompanyDetails />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<PersonDetails />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;