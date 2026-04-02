import { useState } from 'react';
import '@shared/styles/MainPage.scss';
import TypingTestMenu from '@widgets/TypingTestMenu/TypingTestMenu';
import TestTextField from '@widgets/TestTextField/TestTextField';
import StartTestOverlay from '@widgets/StartTestOverlay/StartTestOverlay';
import useTextLoader from '@features/textLoader/hooks/useTextLoader';

function MainPage() {
    const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>(
        'easy',
    );
    const [isTestStarted, setStarted] = useState<true | false>(false);
    const [currentTimeLeft, setTime] = useState<number>(60);
    const textData = useTextLoader(difficulty);

    return (
        <section className='typing-test-container'>
            <TypingTestMenu
                isTestStarted={isTestStarted}
                setStarted={setStarted}
                currentDifficulty={difficulty}
                setDifficulty={setDifficulty}
                currentTimeLeft={currentTimeLeft}
                setTime={setTime}
            />
            <StartTestOverlay
                isTestStarted={isTestStarted}
                setStarted={setStarted}
                setTime={setTime}
            >
                <TestTextField
                    textToView={textData}
                    isTestStarted={isTestStarted}
                />
            </StartTestOverlay>
        </section>
    );
}

export default MainPage;
