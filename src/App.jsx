import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import AIYuva from "./components/AIYuva/AIYuva";

import ScrollToTop from "./components/ScrollToTop";
import OurStory from "./pages/OurStory/OurStory";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import InsideLab from "./pages/About/InsideLab";
import MakerJourney from "./pages/About/MakerJourney";
import People from "./pages/About/People";
import ImpactStories from "./pages/About/ImpactStories";
import InnovationNetwork from "./pages/About/InnovationNetwork";

import Programs from "./pages/Programs/Programs";

import Schools from "./pages/Programs/Schools";
import College from "./pages/Programs/College";
import Startups from "./pages/Programs/Startups";
import Workshops from "./pages/Programs/Workshops";
import Challenges from "./pages/Programs/Challenges";
import Bootcamps from "./pages/Programs/Bootcamps";


import Makerspace from "./pages/Makerspace/Makerspace";
import Events from "./pages/Events/Events";

/* Projects */
import AllProjects from "./pages/projects/AllProjects";
import ResearchInnovation from "./pages/projects/ResearchInnovation";
import StartupShowcase from "./pages/projects/StartupShowcase";
import SuccessStories from "./pages/projects/SuccessStories";
import InnovationShowcase from "./pages/projects/InnovationShowcase";
import AwardsRecognition from "./pages/projects/AwardsRecognition";

import FAQs from "./pages/FAQs/FAQs";

import Contact from "./pages/Contact/Contact";
import Donate from "./pages/Donate/Donate";


// Admin
import MediaCenter from "./pages/Admin/MediaCenter";
import News from "./pages/News";
// Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

function AppLayout() {

    const location = useLocation();

    const storyRoutes = [
      "/our-story"
    ];

    const isStory = storyRoutes.some(route =>
      location.pathname.startsWith(route)
    );

    return (
<>

            {!isStory && <ScrollToTop />}
            {!isStory && <AIYuva />}
            {!isStory && <Navbar />}

            <main
              style={{
                minHeight: "100vh",
                paddingTop: isStory ? "0" : "90px",
                overflow: isStory ? "hidden" : "visible",
              }}
            >
              <Routes>

                {/* Public Routes */}

                <Route
                  path="/"
                  element={<Home />}
                />
        

                <Route
                  path="/about"
                  element={<About />}
                />

                <Route 
                  path="/about/inside-lab" 
                  element={<InsideLab/>}
                  />


                  <Route 
                  path="/about/maker-journey" 
                  element={<MakerJourney/>}
                  />


                  <Route 
                  path="/about/people" 
                  element={<People/>}
                  />

                  <Route path="/news" element={<News />} />
                  <Route 
                  path="/about/impact-stories" 
                  element={<ImpactStories/>}
                  />

                  <Route path="/our-story" element={<OurStory />} />
                  <Route 
                  path="/about/network" 
                  element={<InnovationNetwork/>}
                  />

                <Route path="/programs" element={<Programs />} />
                <Route path="/programs/schools" element={<Schools />} />
                <Route path="/programs/college" element={<College />} />
                <Route path="/programs/startups" element={<Startups />} />
                <Route path="/programs/workshops" element={<Workshops />} />
                <Route path="/programs/challenges" element={<Challenges />} />
                <Route path="/programs/bootcamps" element={<Bootcamps />} />
                <Route path="/makerspace" element={<Makerspace />} />
                <Route path="/events" element={<Events />} />
                <Route
                  path="/gallery"
                  element={<Gallery />}
                />

              {/* Projects */}
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/projects/research-innovation" element={<ResearchInnovation />} />
              <Route path="/projects/startup-showcase" element={<StartupShowcase />} />
              <Route path="/projects/success-stories" element={<SuccessStories />} />
              <Route path="/projects/innovation-showcase" element={<InnovationShowcase />} />
              <Route path="/projects/awards-recognition" element={<AwardsRecognition />} />

                <Route path="/faqs" element={<FAQs />} />

                <Route path="/contact" element={<Contact />} />

                <Route
                  path="/login"
                  element={<Login />}
                />

                <Route
                  path="/signup"
                  element={<Signup />}
                />

                <Route path="/donate" element={<Donate />} />

                {/* User Routes */}

                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                {/* Admin Routes */}

                <Route
                  path="/admin"
                  element={
                    <AdminRoute>
                      <MediaCenter />
                    </AdminRoute>
                  }
                />

              </Routes>
            </main>

      {!isStory && <Footer />}

    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}