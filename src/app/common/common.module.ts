import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { MinuteToHoursPipe } from './pipes/minute-to-hours.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [FakeLogoComponent, SearchInputComponent, MinuteToHoursPipe],
    imports: [CommonModule, FontAwesomeModule],
    exports: [FakeLogoComponent, SearchInputComponent, MinuteToHoursPipe],
})
export class AppCommonModule {}
