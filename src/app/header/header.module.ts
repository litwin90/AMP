import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppCommonModule } from '../common/common.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
    declarations: [HeaderComponent, AuthComponent],
    imports: [CommonModule, AppCommonModule],
    exports: [HeaderComponent, AuthComponent],
})
export class HeaderModule {}
