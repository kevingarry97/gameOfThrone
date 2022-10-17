import http from './httpService';
import url from '../config.json';

const apiEndPoint = url.url + '/characters';

/**Calling Get All Characters API */
export const getCharacters = () => {
  return http.get(apiEndPoint);
}

/**Calling Get Single Character API */
export const singleCharacter = (id: number) => {
  return http.get(apiEndPoint + '/' + id);
}
