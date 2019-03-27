export default {
    getQuestions: () => {
        const url = 'https://d10pu24hbl.execute-api.us-east-2.amazonaws.com/v1/questions';

        return fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                data = jsonData;
            })
            .catch(function(error) {
                console.warn(error);
            });
    },
    getAnswers: () => {
        const url = 'https://d10pu24hbl.execute-api.us-east-2.amazonaws.com/v1/answers';

        return fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                answers = jsonData;
            })
            .catch(function(error) {
                console.warn(error);
            });
    },
    getQuestion: questionId => {
        const url = `https://d10pu24hbl.execute-api.us-east-2.amazonaws.com/v1/questions/${questionId}`;

        return fetch(url)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .catch(function(error) {
                console.warn(error);
            });
    },
    getAnswer: questionId => {
        const url = `https://d10pu24hbl.execute-api.us-east-2.amazonaws.com/v1/answers/${questionId}`;

        return fetch(url)
            .then(response => response.json())
            .catch(function(error) {
                console.warn(error);
            });
    },
};
