import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { CourseControlsComponent } from './course-controls/course-controls.component';
import { AppCommonModule } from '../common/common.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
    declarations: [
        MainComponent,
        BreadCrumbsComponent,
        CourseControlsComponent,
        CoursesListComponent,
        CourseItemComponent,
    ],
    imports: [CommonModule, AppCommonModule],
    exports: [MainComponent],
})
export class MainModule {}
