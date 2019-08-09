export interface ICourse {
    id: string;
    title: string;
    creationDate: number;
    duration: number;
    description: string;
}

export class Course implements ICourse {
    public id: string;
    public title: string;
    public creationDate: number;
    public duration: number;
    public description: string;

    constructor(id: string, title: string, creationDate: number, duration: number, description: string) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
    }
}

export const fakeCourse: ICourse = new Course(
    'some_id',
    'Course Title',
    1565281095187,
    120,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
     containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
     versions of Lorem Ipsum.`,
);
