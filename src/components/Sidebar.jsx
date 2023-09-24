import { FaGithub, FaQuestion } from "react-icons/fa6";
import { SiReplit } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import './Sidebar.scss'

const Sidebar = ({ isOpen, toggleBar }) => {
    const menuItems = [
        {
            name: 'Il mio profilo Github',
        linkTo: 'https://github.com/XMotion128/',
        id: 0,
        icon: <FaGithub className='icon' />,
    },
        {
            name: 'Il mio profilo Replit',
        linkTo: 'https://replit.com/@AldoRuggiero',
        id: 1,
        icon: <SiReplit className='icon' />
    },
        {
            name: 'Non farlo, fidati',
        linkTo: 'https://bit.ly/3jMwa0A',
        id: 2,
        icon: <FaQuestion className='icon' />,
    }
        ];

    return (
        <div className="sidebar-container" style={isOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(-20rem)' }}>
            <div className="sidebar">
                <h3 style={{ textAlign: 'center', color: 'white' }} ><span>Menù laterale</span></h3>

                {menuItems.map((menuItem) => {
                    return (
                        <a className='menu-item' key={menuItem.id} href={menuItem.linkTo}>{menuItem.icon}<span>{menuItem.name}</span></a>
                    )
                })}
            </div>
            <button className='close-button' onClick={toggleBar}><RxCross2 /></button>
        </div>
    )
}

export default Sidebar;