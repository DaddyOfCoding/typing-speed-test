import request from '@shared/api/client.ts';

type textTaskItems = {
    id: string;
    text: string;
};

export type loadTextApiTypes = {
    easy: textTaskItems[];
    medium: textTaskItems[];
    hard: textTaskItems[];
};

async function loadTextApi(): Promise<loadTextApiTypes> {
    const response_data = await request<loadTextApiTypes>({
        url: '/data.json',
    });

    return response_data;
}

export default loadTextApi;
