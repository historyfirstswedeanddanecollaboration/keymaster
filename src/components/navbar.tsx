import Link from "next/link";
import styled from "styled-components";

const Navbar = () =>{
    return(
        <$Navbar>
                <$NavLogo>
                    <img src="/images/logo.png" alt="" />
                </$NavLogo>
                <$NavItem>
                    <$NavLink href='/leaderboard'>LEADERBOARD</$NavLink>
                    <$NavLink href='/tips-tricks'>TIPS & TRICKS</$NavLink>
                    <$NavLink href='/profile'><img src="/images/profile.png" alt="" /></$NavLink>
                </$NavItem>
        </$Navbar>
    )
}  

const $Navbar = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@200&display=swap');    
    font-family: 'IBM Plex Sans Thai', sans-serif;
    display: flex;
    justify-content: space-between;
    color: white;
    border-bottom: 2px solid rgba(255,255,255,0.2);
    width: 70%;
    left: 15%;
    position: absolute;
    padding: 15px;
    top: 20px;
`;

const $NavLogo = styled.nav`
    display: flex;
    flex: 1;
`;

const $NavItem = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12.5%;
    align-items: center;
    flex: 1;
`;

const $NavLink = styled(Link)`
    text-decoration: none;
    color: white;
`;
export default Navbar;