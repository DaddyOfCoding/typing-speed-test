import { useState } from 'react';
import '@shared/styles/App.scss';
import Header from '@widgets/Header/Header';
import MainPage from '@pages/MainPage.tsx';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='root-container'>
            <Header />
            <MainPage />
        </div>
    );
}

export default App;
