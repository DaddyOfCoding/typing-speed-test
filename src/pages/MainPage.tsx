import TypingTestMenu from '@features/TypingTestMenu/TypingTestMenu';

function MainPage() {
    return (
        <section className='typing-test-container'>
            <TypingTestMenu />
            <div className='typing-test-text'></div>
        </section>
    );
}

export default MainPage;
