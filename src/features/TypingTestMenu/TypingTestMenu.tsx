import '@shared/styles/TypingTestMenu.scss';
import Button from '@shared/ui/Button.tsx';

function TypingTestMenu() {
    return (
        <div className='typing-test-menu-container'>
            <div className='left-side-container'>
                <span className='word-per-minute-container'>
                    WPM: <span>{'0'}</span>
                </span>
                <span className='accuracy-container'>
                    Accuracy: <span>{'100%'}</span>
                </span>
                <span className='time-left-container'>
                    Time: <span>{'0:60'}</span>
                </span>
            </div>
            <div className='right-side-container'>
                <div className='difficulty-selector'>
                    <span>Difficulty: </span>
                    <div className='difficulty-buttons-container'>
                        <Button
                            className='difficulty'
                            variant='ghost'
                            buttonContent='Easy'
                        />
                        <Button
                            className='difficulty'
                            variant='ghost'
                            buttonContent='Medium'
                        />
                        <Button
                            className='difficulty'
                            variant='ghost'
                            buttonContent='Hard'
                        />
                    </div>
                </div>
                <div className='mode-selector'>
                    <span>Mode:</span>
                    <div className='mode-selector-buttons-container'>
                        <Button
                            className='mode'
                            variant='ghost'
                            buttonContent='Time (60s)'
                        />
                        <Button
                            className='mode'
                            variant='ghost'
                            buttonContent='Passage'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypingTestMenu;
