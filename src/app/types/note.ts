export default class Note {
    title: string;
    body: string;
    createdAt: number;

    constructor(t: string, b: string, createdAt?: number) {
        this.title = t;
        this.body = b;
        this.createdAt = createdAt || Note.NewCreatedAt();
    }

    static NewCreatedAt() {
        return new Date().getUTCMilliseconds();
    }
}