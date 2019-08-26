import { Component, OnInit, Input } from '@angular/core';
import { ICourse, getDefaultCourseList } from '../course-item/course-item.models';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
    @Input() initialListSize = 2;
    @Input() loadRequestSize = 2;

    listSize: number;
    courses: ICourse[];

    constructor() {}

    ngOnInit() {
        this.courses = getDefaultCourseList(10);
        this.setListSize(this.initialListSize);
    }

    onEditCourse(id: string) {
        console.log(`Edited course id: ${id}`);
    }

    onDeleteCourse(id: string) {
        console.log(`Deleted course id: ${id}`);
    }

    onLoadRequest() {
        this.setListSize(this.listSize + this.loadRequestSize);
    }

    setListSize(size: number) {
        this.listSize = size;
    }
}
