import { useEffect } from 'react';

function useCountDownTimer(
    isTestStarted: boolean,
    setStarted: React.Dispatch<React.SetStateAction<boolean>>,
    currentTimeLeft: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
): number {
    useEffect(() => {
        if (!isTestStarted) return;

        const intervalID = setInterval(() => {
            setTime((prev) => {
                const next = prev - 1;
                return next > 0 ? next : 0;
            });
        }, 1000);
        return () => clearInterval(intervalID);
    }, [isTestStarted, setStarted]);

    useEffect(() => {
        if (currentTimeLeft === 0) {
            setStarted(false);
        }
    }, [currentTimeLeft, setStarted]);

    console.log(currentTimeLeft);
    return currentTimeLeft;
}

export default useCountDownTimer;
