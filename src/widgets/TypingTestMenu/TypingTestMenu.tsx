import '@shared/styles/TypingTestMenu.scss';
import Button from '@shared/ui/Button.tsx';
import React, { useState } from 'react';
import useCountDownTimer from '@features/countDownTimer/hooks/useCountDownTimer';

type DifficultyTypes = {
    currentDifficulty: 'easy' | 'medium' | 'hard';
    setDifficulty: (value: 'easy' | 'medium' | 'hard') => void;
};

type CurrentTimeTypes = {
    currentTimeLeft: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
};

type TypingTestMenuTypes = DifficultyTypes &
    CurrentTimeTypes & {
        isTestStarted: boolean;
        setStarted: React.Dispatch<React.SetStateAction<boolean>>;
    };

function TypingTestMenu({
    currentDifficulty,
    setDifficulty,
    isTestStarted,
    setStarted,
    currentTimeLeft,
    setTime,
}: TypingTestMenuTypes) {
    const [focusedMode, setModeFocus] = useState<'timed' | 'passage' | null>(
        'timed',
    );

    useCountDownTimer(isTestStarted, setStarted, currentTimeLeft, setTime);

    return (
        <div className='typing-test-menu'>
            <div className='typing-test-menu__left gap-5'>
                <span className='typing-test-menu__metric padding-right-10'>
                    WPM: <span>{'0'}</span>
                </span>
                <span className='typing-test-menu__metric padding-left-10 padding-right-10 border-left'>
                    Accuracy: <span>{'100%'}</span>
                </span>
                <span className='typing-test-menu__metric padding-left-10 border-left'>
                    Time: <span>0:60</span>
                </span>
            </div>
            <div className='typing-test-menu__right gap-5'>
                <div className='typing-test-menu__difficulty-selector gap-5 padding-right-10'>
                    <span>Difficulty: </span>
                    <div className='typing-test-menu__difficulty-buttons gap-5'>
                        <Button
                            className={`difficulty border-left ${currentDifficulty === 'easy' ? 'focused' : ''}`}
                            variant='ghost'
                            buttonContent='Easy'
                            onClick={() => {
                                if (currentDifficulty !== 'easy') {
                                    setDifficulty('easy');
                                }
                            }}
                            onFocus={() => setDifficulty('easy')}
                            disabled={isTestStarted === true}
                        />
                        <Button
                            className={`difficulty ${currentDifficulty === 'medium' ? 'focused' : ''}`}
                            variant='ghost'
                            buttonContent='Medium'
                            onClick={() => {
                                if (currentDifficulty !== 'medium') {
                                    setDifficulty('medium');
                                }
                            }}
                            onFocus={() => setDifficulty('medium')}
                            disabled={isTestStarted === true}
                        />
                        <Button
                            className={`difficulty ${currentDifficulty === 'hard' ? 'focused' : ''}`}
                            variant='ghost'
                            buttonContent='Hard'
                            onClick={() => {
                                if (currentDifficulty !== 'hard') {
                                    setDifficulty('hard');
                                }
                            }}
                            onFocus={() => setDifficulty('hard')}
                            disabled={isTestStarted === true}
                        />
                    </div>
                </div>
                <div className='typing-test-menu__mode-selector gap-5 padding-left-10 border-left'>
                    <span>Mode:</span>
                    <div className='typing-test-menu__mode-buttons gap-5'>
                        <Button
                            className={`mode ${focusedMode === 'timed' ? 'focused' : ''}`}
                            variant='ghost'
                            buttonContent='Timed (60s)'
                            onFocus={() => setModeFocus('timed')}
                            disabled={isTestStarted === true}
                        />
                        <Button
                            className={`mode ${focusedMode === 'passage' ? 'focused' : ''}`}
                            variant='ghost'
                            buttonContent='Passage'
                            onFocus={() => setModeFocus('passage')}
                            disabled={isTestStarted === true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypingTestMenu;
