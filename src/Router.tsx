import { Routes, Route } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp";
import LayoutAuth from "./layouts/LayoutAuth";
import Home from "./pages/Home";
import Crowdfunding from "./pages/Crowdfunding";
import Shopping from "./pages/Shopping";
import Seller from "./pages/Seller";
import Profile from "./pages/Profile";
import CampaingDetails from "./pages/CampaingDetails";
import CreateCampaing from "./pages/CreateCampaing";
import MyCampaings from "./pages/MyCampaings";
import EditCampaing from "./pages/EditCampaing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProcessPayment from "./pages/ProcessPayment";

export default function Router() {
    return (
        <Routes>
            <Route path="/auth" element={<LayoutAuth />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route element={<LayoutApp />}>
                <Route path="/" element={<Home />}/>
                <Route path="/shopping" element={<Shopping />}/>
                <Route path="/seller" element={<Seller />}/>
                <Route path="/crowdfunding" element={<Crowdfunding />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/campaing" element={<CampaingDetails />}/>
                <Route path="/create-campaing" element={<CreateCampaing />}/>
                <Route path="/edit-campaing" element={<EditCampaing />}/>
                <Route path="/my-campaings" element={<MyCampaings />}/>
                <Route path="/process-payment" element={ <ProcessPayment/> }/>
            </Route>
        </Routes>
    )
}