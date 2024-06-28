import Topbar from "../components/topbar/Topbar";
import Navigation from "../components/navigation/Navigation";
import { ContextWrapper } from "../ContextWrapper";
import { useContext } from "react";
import { ToggleContext } from "../ContextWrapper";
import "../components/Main.css"
import DebtorList from "../components/debtorsList/DebtorList";

const MainSection = () => {
    const { handleToggle, istoggleMenu } = useContext(ToggleContext)
    return (
        <div className={`main ${istoggleMenu ? 'active' : ''}`}>
            <Topbar />
            <DebtorList />
        </div>
    );
};

const Profile = () => {
    return (
        <ContextWrapper>
            <div>
                <Navigation />
                <MainSection />
            </div>
        </ContextWrapper>
    )
}

export default Profile
