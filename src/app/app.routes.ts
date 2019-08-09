import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { CoursePageComponent } from './main/course-page/course-page.component';
import { NotFoundComponent } from './main/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'redirect', redirectTo: 'courses', pathMatch: 'full' },

    // Redirect to
    { path: 'courses', component: MainComponent },

    // Course page
    { path: 'course/:id', component: CoursePageComponent },

    // 404
    { path: 'notFound', component: NotFoundComponent },
    { path: '**', redirectTo: 'notFound' },
];
