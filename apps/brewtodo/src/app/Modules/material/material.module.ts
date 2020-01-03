import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
    ],
    exports: [
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
    ],
})
export class MaterialModule {}
