import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/LandingPage"
import LoginPage from "./Components/Login/Login"
import SignupPage from "./Components/Sign_Up/Sign_Up"
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./Components/DoctorCard/DoctorCard";
import BookConsultation from "./Components/BookConsultation";
import Notification from "./Components/Notification/Notification";
import Reviews from "./Components/ReviewForm/Reviews";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Notification>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/signup" element={<SignupPage/>}/>
                        <Route path="/instant-consultation" element={<InstantConsultation/>}/>
                        <Route path="/find-doctor" element={<FindDoctorSearch/>}/>
                        <Route path="/doctor-card" element={<DoctorCard/>}/>
                        <Route path="/book-consultation" element={<BookConsultation/>}/>
                        <Route path="/reviews" element={<Reviews/>}/>
                        <Route path="/profile" element={<ProfileCard/>}/>
                        <Route path="/reports" element={<ReportsLayout/>}/>

                    </Routes>
                </Notification>
            </BrowserRouter>
        </ div>
    );
}

export default App;