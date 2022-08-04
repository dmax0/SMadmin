const devBaseURL = 'https://httpbin.org';
const prodBaseURL = 'https://baidu.com';

export const BaseURL = process.env.NODE_ENV === 'development' ? devBaseURL: prodBaseURL;

export const TIMEOUT = 6000;
export const TOKEN = '';