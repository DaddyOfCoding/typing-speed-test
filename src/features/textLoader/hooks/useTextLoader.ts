import { useEffect, useMemo, useState } from 'react';
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

    const selectedText = useMemo(() => {
        if (!data) {
            return 'loading';
        }

        return selectRandomTextByDifficulty(data, difficulty);
    }, [data, difficulty]);

    return selectedText;
};

export default useTextLoader;
