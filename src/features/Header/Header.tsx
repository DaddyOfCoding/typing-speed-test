import '@shared/styles/Header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header__website-logo'></div>
            <div className='header__personal-score'>
                <svg className='header__cup-icon'></svg>
                <span>Personal best:</span>
                <span className='header__score'>92 WPM</span>
            </div>
        </div>
    );
}

export default Header;
