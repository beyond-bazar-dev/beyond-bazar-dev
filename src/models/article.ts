export class Article {
    public title: String = '';
    public description: String = '';
    public author: String = '';
    public date = Date.now.toString();
    public isPublished: boolean = false;
    public tags: String[] = [];
    public categories: String[] = []; 
    public slug: String = '';

    public constructor() {}
}