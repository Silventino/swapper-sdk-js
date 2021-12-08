import axios from 'axios';

export async function getContests() {
  const username = 'silventino';
  const api_key = 'd829b9bc250f46a7e659478cc9e3e716d99909d6';

  const res = await axios.get(
    'https://clist.by/api/v1/json/contest/?username=' +
      username +
      '&api_key=' +
      api_key +
      '&limit=20&end__gt=2020-09-19T00%3A00%3A00',
  );

  return res;
}
