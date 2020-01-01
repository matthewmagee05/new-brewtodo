import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
    declarations: [],
    imports: [CommonModule, MatSelectModule, MatButtonModule],
    exports: [MatSelectModule, MatButtonModule],
})
export class MaterialModule {}
