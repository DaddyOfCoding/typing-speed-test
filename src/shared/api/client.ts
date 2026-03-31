const apiBase = 'http://localhost:5173';

type requestTypes = {
    url: string;
    options?: RequestInit;
};

async function request<T>(requestData: requestTypes): Promise<T> {
    const request_result = await fetch(
        apiBase + requestData.url,
        requestData.options,
    );

    if (!request_result.ok) {
        throw new Error(`Resopnse status: ${request_result.status}`);
    }

    const response_data = await request_result.json();
    console.log(response_data);

    return response_data;
}

export default request;
