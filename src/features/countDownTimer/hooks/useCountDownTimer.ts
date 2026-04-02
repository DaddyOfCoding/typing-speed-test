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

                if (!(next > 0)) {
                    setStarted(false);
                    return 0;
                }
                return next;
            });
        }, 1000);

        return () => clearInterval(intervalID);
    }, [isTestStarted, setStarted, setTime]);

    return currentTimeLeft;
}

export default useCountDownTimer;
