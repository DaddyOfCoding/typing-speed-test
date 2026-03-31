import { useEffect, useState } from 'react';
import loadTextApi, {
    type loadTextApiTypes,
} from '@features/textLoader/api/loadTextApi.ts';
import selectRandomTextByDifficulty from '@shared/utils/selectRandomText';

const useTextLoader = (difficulty: 'easy' | 'medium' | 'hard'): string => {
    const [data, setData] = useState<loadTextApiTypes | null>(null);

    useEffect(() => {
        async function fetchTestText() {
            const loaded_text = await loadTextApi();
            setData(loaded_text);
        }
        fetchTestText();
    }, []);

    if (!data) {
        return 'loading';
    }

    if (difficulty === 'easy') {
        return selectRandomTextByDifficulty(data, difficulty);
    }
    if (difficulty === 'medium') {
        return selectRandomTextByDifficulty(data, difficulty);
    }
    if (difficulty === 'hard') {
        return selectRandomTextByDifficulty(data, difficulty);
    }

    return '';
};

export default useTextLoader;
