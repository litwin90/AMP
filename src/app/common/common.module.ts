import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ButtonComponent } from './button/button.component';
import { MinuteToHoursPipe } from './pipes/minute-to-hours.pipe';

@NgModule({
    declarations: [FakeLogoComponent, SearchInputComponent, ButtonComponent, MinuteToHoursPipe],
    imports: [CommonModule],
    exports: [FakeLogoComponent, SearchInputComponent, ButtonComponent, MinuteToHoursPipe],
})
export class AppCommonModule {}
