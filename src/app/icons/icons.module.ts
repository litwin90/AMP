import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTrash, faUser, faSignOutAlt, faSignInAlt, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [],
    imports: [CommonModule, FontAwesomeModule],
})
export class IconsModule {
    constructor() {
        library.add(faSearch, faClock, faCalendarAlt, faPen, faTrash, faUser, faSignOutAlt, faSignInAlt, faPlus);
    }
}
