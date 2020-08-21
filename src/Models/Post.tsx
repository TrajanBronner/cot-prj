export class Post {
    userId: string = '';
    id: string = '';
    title: string = '';
    body: string = '';

    constructor(args?: Partial<Post>) {
        if (args == null) {
            return;
        }

        this.userId = args.userId || '';
        this.id = args.id || '';
        this.title = args.title || '';
        this.body = args.body || '';
    }

    static deserialize(postData: any) {
        return new Post(postData);
    }
}