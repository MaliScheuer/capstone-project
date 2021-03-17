export default function loadFromLocal(key) {
    try {
        const local = JSON.parse(localStorage.getItem(key));
        return local;
    } catch (error) {
        console.error(error.message);
    }
};


