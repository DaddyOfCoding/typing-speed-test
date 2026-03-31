import { useState } from 'react';
import '@shared/styles/MainPage.scss';
import TypingTestMenu from '@widgets/TypingTestMenu/TypingTestMenu';
import TestTextField from '@widgets/TestTextField/TestTextField';
import useTextLoader from '@features/textLoader/hooks/useTextLoader';

function MainPage() {
    const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>(
        'easy',
    );
    const textData = useTextLoader(difficulty);

    return (
        <section className='typing-test-container'>
            <TypingTestMenu
                currentDifficulty={difficulty}
                setDifficulty={setDifficulty}
            />
            <TestTextField textToView={textData} />
        </section>
    );
}

export default MainPage;
