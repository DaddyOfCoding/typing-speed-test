import '@shared/styles/StartTestOverlay.scss';
import Button from '@shared/ui/Button';

type CurrentTimeTypes = {
    setTime: React.Dispatch<React.SetStateAction<number>>;
};

type StarTestOverlayProps = CurrentTimeTypes & {
    isTestStarted: boolean;
    setStarted: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
};

function StartTestOverlay({
    isTestStarted,
    children,
    setStarted,
    setTime,
}: StarTestOverlayProps) {
    return (
        <div
            className='overlay-container'
            onClick={() => {
                if (!isTestStarted) {
                    setStarted(true);
                }
            }}
        >
            {children}
            {!isTestStarted && (
                <div className='overlay-wrapper'>
                    <Button
                        className='overlay-wrapper__start-button'
                        buttonContent='Start Typing Test'
                        variant='primary'
                        onClick={() => {
                            setTime(60);
                            setStarted(true);
                        }}
                    />
                    <span className='overlay-wrapper__additionary-text'>
                        Or click the text and start typing
                    </span>
                </div>
            )}
        </div>
    );
}

export default StartTestOverlay;
