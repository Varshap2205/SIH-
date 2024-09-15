import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth/User";
import Home from "./LandingPage/components/Home";
import AiBot from "./Aibot/components/AiBot";
import Faq from "./LandingPage/components/Faq";
import PageNotFound from "./components/PageNotFound";

import Profile from "./Dashboard/components/Profile";
import Page from "./Auth/Page";
import Loyer from "./Auth/Loyer";
import EditProfile from "./Dashboard/components/EditProfile";
import ProfilePage from "./Dashboard/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
<<<<<<< HEAD

=======
        
>>>>>>> 89ea9753ddcd0d7e27f3e8e96184356ca718ddfe
        {/* Nested route structure under /auth */}
        <Route path="/auth" element={<Page />}>
          <Route path="user" element={<Auth />} />
          <Route path="loyer" element={<Loyer />} />
        </Route>

        <Route path="/aibot" element={<AiBot />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile1" element={<Profile />} />
        <Route path="/edit" element={<EditProfile />} />

        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;