export class Story {
  constructor (
    public id: string = '',
    public subject: string = '',
    public author: string = '',
    public created: string = '',
    public excerpt: string = '',
    public text: string = '') { }
}

/*
export interface IStory {
  $key?: string;
  createdAt: number;
  subject: string;
  subject: string;
  author: string;
  excerpt: string;
  text: string;
}

export class Story implements IStory {
  createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
  subject: string;
  subject: string;
  author: string;
  excerpt: string;
  text: string;

  constructor(subject: string, author: string, excerpt: string, text: string) {
    this.subject = subject;
    this.author = author;
    this.excerpt = excerpt;
    this.text = text;
  }
}*/
