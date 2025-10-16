import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import DivisionPage from './components/DivisionPage';
import YearPage from './components/YearPage';
import ProblemPage from './components/ProblemPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [selectedDivision, setSelectedDivision] = useState<'junior' | 'senior' | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedDivision(null);
    setSelectedYear(null);
    setSelectedProblem(null);
  };

  const handleDivisionSelect = (division: 'junior' | 'senior') => {
    setSelectedDivision(division);
    setCurrentPage('Division');
  };

  const handleYearSelect = (year: string, division: 'junior' | 'senior') => {
    setSelectedYear(year);
    setSelectedDivision(division);
    setCurrentPage('Year');
  };

  const handleProblemSelect = (problemId: string) => {
    setSelectedProblem(problemId);
    setCurrentPage('Problem');
  };

  const handleBackToHome = () => {
    setSelectedDivision(null);
    setSelectedYear(null);
    setSelectedProblem(null);
    setCurrentPage('Home');
  };

  const handleBackToDivision = () => {
    setSelectedYear(null);
    setSelectedProblem(null);
    setCurrentPage('Division');
  };

  const handleBackToYear = () => {
    setSelectedProblem(null);
    setCurrentPage('Year');
  };

  const renderPage = () => {
    if (selectedProblem !== null) {
      return <ProblemPage problemId={selectedProblem} onBack={handleBackToYear} />;
    }

    if (currentPage === 'Year' && selectedYear && selectedDivision) {
      return <YearPage year={selectedYear} division={selectedDivision} onBack={handleBackToDivision} onProblemSelect={handleProblemSelect} />;
    }

    if (currentPage === 'Division' && selectedDivision) {
      return <DivisionPage division={selectedDivision} onBack={handleBackToHome} onYearSelect={handleYearSelect} />;
    }

    switch (currentPage) {
      case 'Home':
        return <HomePage onDivisionSelect={handleDivisionSelect} />;
      case 'About':
        return <AboutPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage onDivisionSelect={handleDivisionSelect} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
