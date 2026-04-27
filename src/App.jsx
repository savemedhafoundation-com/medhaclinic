import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import WhyMedha from './pages/WhyMedha'
import PrivacyPolicy from './pages/PrivacyPolicy'
import DeleteAccount from './pages/DeleteAccount'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/whymedhaclinic" element={<WhyMedha />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
