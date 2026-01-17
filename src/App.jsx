import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import WhyMedha from './pages/WhyMedha'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/whymedhaclinic" element={<WhyMedha />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
