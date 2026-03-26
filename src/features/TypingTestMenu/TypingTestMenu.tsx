import '@shared/styles/TypingTestMenu.scss';
import Button from '@shared/ui/Button.tsx';

function TypingTestMenu() {
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
                    Time: <span>{'0:60'}</span>
                </span>
            </div>
            <div className='typing-test-menu__right gap-5'>
                <div className='typing-test-menu__difficulty-selector gap-5 padding-right-10'>
                    <span>Difficulty: </span>
                    <div className='typing-test-menu__difficulty-buttons gap-5'>
                        <Button
                            className='difficulty border-left'
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
                <div className='typing-test-menu__mode-selector gap-5 padding-left-10 border-left'>
                    <span>Mode:</span>
                    <div className='typing-test-menu__mode-buttons gap-5'>
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
