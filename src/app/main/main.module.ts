import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { CourseControlsComponent } from './course-controls/course-controls.component';
import { AppCommonModule } from '../common/common.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
    declarations: [
        MainComponent,
        BreadCrumbsComponent,
        CourseControlsComponent,
        CoursesListComponent,
        CourseItemComponent,
        CoursePageComponent,
        NotFoundComponent,
        LoadMoreComponent,
    ],
    imports: [CommonModule, AppCommonModule, AppRoutingModule],
    exports: [MainComponent],
})
export class MainModule {}
