export const fetcher = async (URL: string) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('서버 상태가 이상합니다!');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
