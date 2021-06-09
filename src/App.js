import './App.css';
import Content from './components/contentSection/content';
import DownloadApp from './components/downloadApp/downloadApp';
import Footer from './components/footer/footer';
import ContactUsForm from './components/forms/contactUsForm';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Content />
    <DownloadApp />
    <ContactUsForm />
    <Footer />
    </>
  );
}

export default App;
