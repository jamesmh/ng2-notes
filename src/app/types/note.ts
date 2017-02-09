export default class Note {
    title: string;
    body: string;
    createdAt: number;

    constructor(t: string, b: string) {
        this.title = t;
        this.body = b;
        this.createdAt = new Date().getUTCMilliseconds();
    }
}