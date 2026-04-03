import '@shared/styles/TestTextField.scss';
import Button from '@shared/ui/Button.tsx';
import { VscDebugRestart } from 'react-icons/vsc';

type TestFieldProps = {
    textToView: string;
    isTestStarted: boolean;
};

function TestTextField({ textToView, isTestStarted }: TestFieldProps) {
    console.log(textToView);
    return (
        <div className='test-text-container'>
            <div className='test-text-container__test-text-field border-top'>
                <span>{textToView}</span>
            </div>
            <div
                className={`test-text-container__restart-test-button-container border-top ${isTestStarted === false ? 'hidden' : ''}`}
            >
                <Button
                    className='test-text-container__restart-test-button'
                    buttonContent=<>Restart Test</>
                    buttonIcon=<VscDebugRestart />
                    variant='secondary'
                />
            </div>
        </div>
    );
}

export default TestTextField;
