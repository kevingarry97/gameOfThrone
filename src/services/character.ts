import http from './httpService';
import url from '../config.json';

const apiEndPoint = url.url + '/characters';

export const getCharacters = () => {
  return http.get(apiEndPoint);
}

export const singleCharacter = (id: number) => {
  return http.get(apiEndPoint + '/' + id);
}
