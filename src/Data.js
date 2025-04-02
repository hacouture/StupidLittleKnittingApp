const DB = {
    initDB: () => {
        if (localStorage.getItem('knittingApp') === null) {
            localStorage.setItem('knittingApp', JSON.stringify([]));
        }
        return localStorage.getItem('knittingApp');
    },
    addStitch: () => {},
    addRound: () => {},
    clearProject: () => {
        localStorage.setItem('knittingApp', JSON.stringify([]));
    },
    getProject: () => {
        return JSON.parse(localStorage.getItem('knittingApp'));
    },
    removeStitch: () => {},
    removeRound: () => {},
    updateStitch: () => {},
    updateRound: () => {}
};

export default DB;
