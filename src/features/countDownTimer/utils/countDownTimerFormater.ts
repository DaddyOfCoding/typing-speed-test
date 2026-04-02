function countDownTimerFormater(seconds: number): string {
    const getMinutes = Math.floor(seconds / 60);
    const getSeconds = seconds % 60;
    const formatedTime = `${getMinutes}:${getSeconds < 10 ? `0${getSeconds} ` : getSeconds}`;

    return formatedTime;
}

export default countDownTimerFormater;
