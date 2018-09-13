import 'isomorphic-fetch';

const user = 'f71107a858693f48baed86ac2305f58d7d0422f78ab7b74ca33bc031de246048';

export default () => fetch(`https://api.unsplash.com/search/photos/?client_id=${user}&query=duotone&orientation=landscape`);
