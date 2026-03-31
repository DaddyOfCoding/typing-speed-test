type textTaskItems = {
    id: string;
    text: string;
};

type textDictionary = Record<'easy' | 'medium' | 'hard', textTaskItems[]>;

function selectRandomTextByDifficulty(
    textDictionary: textDictionary,
    difficulty: 'easy' | 'medium' | 'hard',
): string {
    const textIndex = getRandomIndex(textDictionary, difficulty);
    const selectedText = getTextByIndex(textDictionary, difficulty, textIndex);

    return selectedText;
}

function getRandomIndex(
    textDictionary: textDictionary,
    difficulty: 'easy' | 'medium' | 'hard',
): number {
    const indexOfSelectedText = Math.floor(
        Math.random() * textDictionary[difficulty].length,
    );

    return indexOfSelectedText;
}

function getTextByIndex(
    textDictionary: textDictionary,
    difficulty: 'easy' | 'medium' | 'hard',
    textIndex: number,
): string {
    const selectedTextByIndex = textDictionary[difficulty][textIndex].text;

    return selectedTextByIndex;
}

export default selectRandomTextByDifficulty;
