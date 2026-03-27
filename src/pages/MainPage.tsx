import '@shared/styles/MainPage.scss';
import TypingTestMenu from '@features/TypingTestMenu/TypingTestMenu';
import TestTextField from '@features/TestTextField/TestTextField.tsx';

function MainPage() {
    return (
        <section className='typing-test-container'>
            <TypingTestMenu />
            <TestTextField />
        </section>
    );
}

export default MainPage;
