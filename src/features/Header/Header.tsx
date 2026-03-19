import '@shared/styles/Header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='website-logo-container'></div>
            <div className='personal-score-container'>
                <svg className='cup-icon'></svg>
                <span>Personal best:</span>
                <span className='score'>92 WPM</span>
            </div>
        </div>
    );
}

export default Header;
